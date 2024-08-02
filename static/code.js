//var energy_impact_data = require('./grid').energy_impact_data;



function capitalizeFirstChar(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function drawChar(old_data, new_data, type='line'){

    // There must be an easier way to do this but for now it works. No idea why I can't just put in a data series. But I can't get it to render properly

    const allYears = Array.from(new Set([...old_data.map(item => item.year), ...new_data.map(item => item.year)])).sort();

    const emissionsMap1 = old_data.reduce((acc, item) => {
        acc[item.year] = item.accumulatedEmissions;
        return acc;
    }, {});

    const emissionsMap2 = new_data.reduce((acc, item) => {
        acc[item.year] = item.accumulatedEmissions;
        return acc;
    }, {});

    const emissions1 = allYears.map(year => emissionsMap1[year] || undefined);
    const emissions2 = allYears.map(year => emissionsMap2[year] || undefined);

    var myChart = echarts.init(document.getElementById('chart_'+type));

    var option = {
        title: {
            text: capitalizeFirstChar(type+ " Chart")
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: allYears
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Old Machine',
                type: type,
                data: emissions1
            },
            {
                name: 'New Machine',
                type: type,
                data: emissions2
            }
        ]
    };
    myChart.setOption(option);
}



function drawTable(old_data, old_accum, new_data, new_accum){

    const combinedData = {};

    function initYearEntry(year) {
        if (!combinedData[year]) {
            combinedData[year] = {
                year,
                emissions: 0,
                accumulatedEmissions: 0,
                additionalEmissions: 0,
                additionalAccumulatedEmissions: 0
            };
        }
    }

    old_data.forEach(item => {
        const year = new Date(item.date).getFullYear();
        initYearEntry(year);
        combinedData[year].emissions = item.emissions;
    });

    old_accum.forEach(item => {
        initYearEntry(item.year);
        combinedData[item.year].accumulatedEmissions = item.accumulatedEmissions;
    });

    new_data.forEach(item => {
        const year = new Date(item.date).getFullYear();
        initYearEntry(year);
        combinedData[year].additionalEmissions = item.emissions;
    });

    new_accum.forEach(item => {
        initYearEntry(item.year);
        combinedData[item.year].additionalAccumulatedEmissions = item.accumulatedEmissions;
    });

    const combinedDataArray = Object.values(combinedData).sort((a, b) => a.year - b.year);

    const tbody = document.querySelector('#emissionsTable tbody');
    combinedDataArray.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.emissions.toFixed(2)}</td>
            <td>${item.accumulatedEmissions.toFixed(2)}</td>
            <td>${item.additionalEmissions.toFixed(2)}</td>
            <td>${item.additionalAccumulatedEmissions.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

function calculateCO2EmissionsYear(tdp, utilisation, grid_intensity) {
    const power_consumption_kwh = tdp * utilisation * 24 * 365 / 1000;  // Convert W to kWh
    const emissions_kg = power_consumption_kwh * grid_intensity / 1000;  // Convert g to kg
    return emissions_kg;
}


function calculateYearlyEmissions(startDate, years, zone, tdp, utilisation, embodied_carbon, model_time_years) {
    const results = [];
    const currentDate = new Date(startDate);
    const embodied_carbon_years = embodied_carbon / years;

    for (let i = 0; i < model_time_years; i++) {

        const grid_intensity = window.energy_impact_data_access[currentDate.getFullYear()][zone];

        if (grid_intensity !== null) {
            let emissions = calculateCO2EmissionsYear(tdp, utilisation, grid_intensity.value);

            if (i < years){
                emissions = emissions + embodied_carbon_years
            }

            results.push({
                date: new Date(currentDate),
                emissions: emissions
            });
        }

        currentDate.setFullYear(currentDate.getFullYear() + 1);
    }

    return results;
}

function accumulateEmissions(data, intialEmissions=0) {

    let accumulatedEmissions = intialEmissions;
    return data.map((item, index) => {
        accumulatedEmissions += item.emissions;
        return {
            year: data[index].date.getFullYear(),
            accumulatedEmissions: accumulatedEmissions
        };
    });
}


function doCalculation(){

    const model_time_years = 15;

    const model_years = parseInt($('#model_years').val());

    const old_embodied_carbon = parseFloat($('#old_embodied_carbon').val());
    const old_utilisation = parseFloat($('#old_utilisation').val()) / 100;
    const old_tdp = parseFloat($('#old_tdp').val());
    const old_grid_intensity_loc = $('#old_grid_intensity').val();
    const old_purchase_date = new Date($('#old_purchase_date').val());

    const new_embodied_carbon = parseFloat($('#new_embodied_carbon').val());
    const new_utilisation = parseFloat($('#new_utilisation').val()) / 100;
    const new_tdp = parseFloat($('#new_tdp').val());
    const new_grid_intensity_loc = $('#new_grid_intensity').val();

    const new_purchase_date = new Date(old_purchase_date);
    new_purchase_date.setFullYear(new_purchase_date.getFullYear() + model_years);

    const old_data = calculateYearlyEmissions(old_purchase_date, model_years, old_grid_intensity_loc, old_tdp, old_utilisation, old_embodied_carbon, model_time_years + model_years);
    const old_accum = accumulateEmissions(old_data, 0);

    new_data = calculateYearlyEmissions(new_purchase_date, model_years, new_grid_intensity_loc, new_tdp, new_utilisation, new_embodied_carbon, model_time_years);

    const sumFirstYears = old_data.slice(0, model_years).reduce((sum, item) => sum + item.emissions, 0);

    const new_accum = accumulateEmissions(new_data, sumFirstYears);

    drawChar(old_accum, new_accum, 'line');
    drawChar(old_accum, new_accum, 'bar');

    drawTable(old_data, old_accum, new_data, new_accum);

}

$(document).ready(function() {

    $('input[type="number"], input[type="text"], input[type="hidden"]').on('change', function() {
        doCalculation();
    });

    $('.main.menu').visibility({type: 'fixed'});

    $('.ui.calendar').calendar({type: 'date'});

    $('.ui.dropdown')
      .dropdown({
        values: [
          { name: 'Africa', value: 'afriq'},
          { name: 'Latin America', value: 'aml'},
          { name: 'North America', value: 'amnord', selected: true},
          { name: 'Asia/ Pacific', value: 'asiepac'},
          { name: 'Russia', value: 'cei'},
          { name: 'Europe', value: 'europe'},
          { name: 'Middle East', value: 'moy'},
        ]
      })
    ;

    $('.old_embodied_carbon_modal_click').on( "click", function() {
        $('#old_embodied_carbon_modal').modal('show');
    });

    $('.grid_intensity_modal_click').on( "click", function() {
        $('#grid_intensity_modal').modal('show');
    });

    $('.thermal_modal_click').on( "click", function() {
        $('#thermal_modal').modal('show');
    });



    doCalculation();

});
