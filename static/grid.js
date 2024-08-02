// Data from https://eneroutlook.enerdata.net/forecast-world-co2-intensity-of-electricity-generation.html

const countries = {
    "Africa": "afriq",
    "zoneCode": "aml",
    "zoneCode": "amnord",
    "Asia/ Pacific": "asiepac",
    "zoneCode": "cei",
    "Europe": "europe",
    "zoneCode": "moy",
}
const energy_impact_data = [
    {
        "id": 55490,
        "zoneCode": "moy",
        "value": 127.20564270019531,
        "year": 2050
    },
    {
        "id": 55491,
        "zoneCode": "moy",
        "value": 136.904296875,
        "year": 2049
    },
    {
        "id": 55492,
        "zoneCode": "moy",
        "value": 147.3455810546875,
        "year": 2048
    },
    {
        "id": 55493,
        "zoneCode": "moy",
        "value": 157.61831665039062,
        "year": 2047
    },
    {
        "id": 55494,
        "zoneCode": "moy",
        "value": 165.8510284423828,
        "year": 2046
    },
    {
        "id": 55495,
        "zoneCode": "moy",
        "value": 174.24807739257812,
        "year": 2045
    },
    {
        "id": 55496,
        "zoneCode": "moy",
        "value": 182.85708618164062,
        "year": 2044
    },
    {
        "id": 55497,
        "zoneCode": "moy",
        "value": 192.3372039794922,
        "year": 2043
    },
    {
        "id": 55498,
        "zoneCode": "moy",
        "value": 201.0736083984375,
        "year": 2042
    },
    {
        "id": 55499,
        "zoneCode": "moy",
        "value": 209.33673095703125,
        "year": 2041
    },
    {
        "id": 55500,
        "zoneCode": "moy",
        "value": 215.8389434814453,
        "year": 2040
    },
    {
        "id": 55501,
        "zoneCode": "moy",
        "value": 223.47543334960938,
        "year": 2039
    },
    {
        "id": 55502,
        "zoneCode": "moy",
        "value": 232.45291137695312,
        "year": 2038
    },
    {
        "id": 55503,
        "zoneCode": "moy",
        "value": 242.87489318847656,
        "year": 2037
    },
    {
        "id": 55504,
        "zoneCode": "moy",
        "value": 254.45394897460938,
        "year": 2036
    },
    {
        "id": 55505,
        "zoneCode": "moy",
        "value": 267.5266418457031,
        "year": 2035
    },
    {
        "id": 55506,
        "zoneCode": "moy",
        "value": 281.4780578613281,
        "year": 2034
    },
    {
        "id": 55507,
        "zoneCode": "moy",
        "value": 297.34844970703125,
        "year": 2033
    },
    {
        "id": 55508,
        "zoneCode": "moy",
        "value": 314.39990234375,
        "year": 2032
    },
    {
        "id": 55509,
        "zoneCode": "moy",
        "value": 329.806640625,
        "year": 2031
    },
    {
        "id": 55510,
        "zoneCode": "moy",
        "value": 347.1162109375,
        "year": 2030
    },
    {
        "id": 55511,
        "zoneCode": "moy",
        "value": 368.4261474609375,
        "year": 2029
    },
    {
        "id": 55512,
        "zoneCode": "moy",
        "value": 391.2497253417969,
        "year": 2028
    },
    {
        "id": 55513,
        "zoneCode": "moy",
        "value": 416.0223083496094,
        "year": 2027
    },
    {
        "id": 55514,
        "zoneCode": "moy",
        "value": 440.9990539550781,
        "year": 2026
    },
    {
        "id": 55515,
        "zoneCode": "moy",
        "value": 464.6938781738281,
        "year": 2025
    },
    {
        "id": 55516,
        "zoneCode": "moy",
        "value": 495.6387634277344,
        "year": 2024
    },
    {
        "id": 55517,
        "zoneCode": "moy",
        "value": 528.1848754882812,
        "year": 2023
    },
    {
        "id": 55518,
        "zoneCode": "moy",
        "value": 516.606689453125,
        "year": 2022
    },
    {
        "id": 55519,
        "zoneCode": "moy",
        "value": 531.9270629882812,
        "year": 2021
    },
    {
        "id": 55520,
        "zoneCode": "moy",
        "value": 544.3546752929688,
        "year": 2020
    },
    {
        "id": 55521,
        "zoneCode": "moy",
        "value": 561.6129760742188,
        "year": 2019
    },
    {
        "id": 55522,
        "zoneCode": "moy",
        "value": 566.2562255859375,
        "year": 2018
    },
    {
        "id": 55523,
        "zoneCode": "moy",
        "value": 590.3624267578125,
        "year": 2017
    },
    {
        "id": 55524,
        "zoneCode": "moy",
        "value": 596.5095825195312,
        "year": 2016
    },
    {
        "id": 55525,
        "zoneCode": "moy",
        "value": 609.447998046875,
        "year": 2015
    },
    {
        "id": 55526,
        "zoneCode": "moy",
        "value": 624.110107421875,
        "year": 2014
    },
    {
        "id": 55527,
        "zoneCode": "moy",
        "value": 653.8963012695312,
        "year": 2013
    },
    {
        "id": 55528,
        "zoneCode": "moy",
        "value": 666.3366088867188,
        "year": 2012
    },
    {
        "id": 55529,
        "zoneCode": "moy",
        "value": 665.7743530273438,
        "year": 2011
    },
    {
        "id": 55530,
        "zoneCode": "moy",
        "value": 666.1027221679688,
        "year": 2010
    },
    {
        "id": 55531,
        "zoneCode": "moy",
        "value": 686.0549926757812,
        "year": 2009
    },
    {
        "id": 55532,
        "zoneCode": "moy",
        "value": 692.8216552734375,
        "year": 2008
    },
    {
        "id": 55533,
        "zoneCode": "moy",
        "value": 662.8704833984375,
        "year": 2007
    },
    {
        "id": 55534,
        "zoneCode": "moy",
        "value": 693.71142578125,
        "year": 2006
    },
    {
        "id": 55535,
        "zoneCode": "moy",
        "value": 699.0733032226562,
        "year": 2005
    },
    {
        "id": 55536,
        "zoneCode": "moy",
        "value": 718.11474609375,
        "year": 2004
    },
    {
        "id": 55537,
        "zoneCode": "moy",
        "value": 713.7739868164062,
        "year": 2003
    },
    {
        "id": 55538,
        "zoneCode": "moy",
        "value": 722.3532104492188,
        "year": 2002
    },
    {
        "id": 55539,
        "zoneCode": "moy",
        "value": 738.841064453125,
        "year": 2001
    },
    {
        "id": 55540,
        "zoneCode": "moy",
        "value": 724.9839477539062,
        "year": 2000
    },
    {
        "id": 55643,
        "zoneCode": "europe",
        "value": 11.516942024230957,
        "year": 2050
    },
    {
        "id": 55644,
        "zoneCode": "europe",
        "value": 12.617155075073242,
        "year": 2049
    },
    {
        "id": 55645,
        "zoneCode": "europe",
        "value": 14.259817123413086,
        "year": 2048
    },
    {
        "id": 55646,
        "zoneCode": "europe",
        "value": 15.476654052734375,
        "year": 2047
    },
    {
        "id": 55647,
        "zoneCode": "europe",
        "value": 17.31460952758789,
        "year": 2046
    },
    {
        "id": 55648,
        "zoneCode": "europe",
        "value": 18.787023544311523,
        "year": 2045
    },
    {
        "id": 55649,
        "zoneCode": "europe",
        "value": 21.07061195373535,
        "year": 2044
    },
    {
        "id": 55650,
        "zoneCode": "europe",
        "value": 23.16193389892578,
        "year": 2043
    },
    {
        "id": 55651,
        "zoneCode": "europe",
        "value": 25.586036682128906,
        "year": 2042
    },
    {
        "id": 55652,
        "zoneCode": "europe",
        "value": 27.47798728942871,
        "year": 2041
    },
    {
        "id": 55653,
        "zoneCode": "europe",
        "value": 30.72797393798828,
        "year": 2040
    },
    {
        "id": 55654,
        "zoneCode": "europe",
        "value": 33.36867141723633,
        "year": 2039
    },
    {
        "id": 55655,
        "zoneCode": "europe",
        "value": 36.53990173339844,
        "year": 2038
    },
    {
        "id": 55656,
        "zoneCode": "europe",
        "value": 39.32826614379883,
        "year": 2037
    },
    {
        "id": 55657,
        "zoneCode": "europe",
        "value": 43.477596282958984,
        "year": 2036
    },
    {
        "id": 55658,
        "zoneCode": "europe",
        "value": 47.1941032409668,
        "year": 2035
    },
    {
        "id": 55659,
        "zoneCode": "europe",
        "value": 51.904449462890625,
        "year": 2034
    },
    {
        "id": 55660,
        "zoneCode": "europe",
        "value": 57.1461296081543,
        "year": 2033
    },
    {
        "id": 55661,
        "zoneCode": "europe",
        "value": 64.78278350830078,
        "year": 2032
    },
    {
        "id": 55662,
        "zoneCode": "europe",
        "value": 75.51740264892578,
        "year": 2031
    },
    {
        "id": 55663,
        "zoneCode": "europe",
        "value": 92.08853912353516,
        "year": 2030
    },
    {
        "id": 55664,
        "zoneCode": "europe",
        "value": 110.93392181396484,
        "year": 2029
    },
    {
        "id": 55665,
        "zoneCode": "europe",
        "value": 127.03582763671875,
        "year": 2028
    },
    {
        "id": 55666,
        "zoneCode": "europe",
        "value": 140.0654754638672,
        "year": 2027
    },
    {
        "id": 55667,
        "zoneCode": "europe",
        "value": 156.930419921875,
        "year": 2026
    },
    {
        "id": 55668,
        "zoneCode": "europe",
        "value": 174.7501983642578,
        "year": 2025
    },
    {
        "id": 55669,
        "zoneCode": "europe",
        "value": 196.33160400390625,
        "year": 2024
    },
    {
        "id": 55670,
        "zoneCode": "europe",
        "value": 209.8832550048828,
        "year": 2023
    },
    {
        "id": 55671,
        "zoneCode": "europe",
        "value": 225.5291290283203,
        "year": 2022
    },
    {
        "id": 55672,
        "zoneCode": "europe",
        "value": 213.66473388671875,
        "year": 2021
    },
    {
        "id": 55673,
        "zoneCode": "europe",
        "value": 205.03883361816406,
        "year": 2020
    },
    {
        "id": 55674,
        "zoneCode": "europe",
        "value": 229.17332458496094,
        "year": 2019
    },
    {
        "id": 55675,
        "zoneCode": "europe",
        "value": 260.4889221191406,
        "year": 2018
    },
    {
        "id": 55676,
        "zoneCode": "europe",
        "value": 273.9945373535156,
        "year": 2017
    },
    {
        "id": 55677,
        "zoneCode": "europe",
        "value": 276.83990478515625,
        "year": 2016
    },
    {
        "id": 55678,
        "zoneCode": "europe",
        "value": 288.8878479003906,
        "year": 2015
    },
    {
        "id": 55679,
        "zoneCode": "europe",
        "value": 296.30450439453125,
        "year": 2014
    },
    {
        "id": 55680,
        "zoneCode": "europe",
        "value": 307.3341369628906,
        "year": 2013
    },
    {
        "id": 55681,
        "zoneCode": "europe",
        "value": 324.3014831542969,
        "year": 2012
    },
    {
        "id": 55682,
        "zoneCode": "europe",
        "value": 325.0840148925781,
        "year": 2011
    },
    {
        "id": 55683,
        "zoneCode": "europe",
        "value": 319.0554504394531,
        "year": 2010
    },
    {
        "id": 55684,
        "zoneCode": "europe",
        "value": 328.3165283203125,
        "year": 2009
    },
    {
        "id": 55685,
        "zoneCode": "europe",
        "value": 344.1369934082031,
        "year": 2008
    },
    {
        "id": 55686,
        "zoneCode": "europe",
        "value": 364.6640625,
        "year": 2007
    },
    {
        "id": 55687,
        "zoneCode": "europe",
        "value": 362.2937316894531,
        "year": 2006
    },
    {
        "id": 55688,
        "zoneCode": "europe",
        "value": 358.15673828125,
        "year": 2005
    },
    {
        "id": 55689,
        "zoneCode": "europe",
        "value": 366.64306640625,
        "year": 2004
    },
    {
        "id": 55690,
        "zoneCode": "europe",
        "value": 374.34100341796875,
        "year": 2003
    },
    {
        "id": 55691,
        "zoneCode": "europe",
        "value": 374.2500305175781,
        "year": 2002
    },
    {
        "id": 55692,
        "zoneCode": "europe",
        "value": 373.7822570800781,
        "year": 2001
    },
    {
        "id": 55693,
        "zoneCode": "europe",
        "value": 373.4476318359375,
        "year": 2000
    },
    {
        "id": 55694,
        "zoneCode": "cei",
        "value": 159.79637145996094,
        "year": 2050
    },
    {
        "id": 55695,
        "zoneCode": "cei",
        "value": 165.16928100585938,
        "year": 2049
    },
    {
        "id": 55696,
        "zoneCode": "cei",
        "value": 173.20448303222656,
        "year": 2048
    },
    {
        "id": 55697,
        "zoneCode": "cei",
        "value": 180.98451232910156,
        "year": 2047
    },
    {
        "id": 55698,
        "zoneCode": "cei",
        "value": 188.22439575195312,
        "year": 2046
    },
    {
        "id": 55699,
        "zoneCode": "cei",
        "value": 194.53506469726562,
        "year": 2045
    },
    {
        "id": 55700,
        "zoneCode": "cei",
        "value": 200.95750427246094,
        "year": 2044
    },
    {
        "id": 55701,
        "zoneCode": "cei",
        "value": 207.3525848388672,
        "year": 2043
    },
    {
        "id": 55702,
        "zoneCode": "cei",
        "value": 215.50741577148438,
        "year": 2042
    },
    {
        "id": 55703,
        "zoneCode": "cei",
        "value": 221.91986083984375,
        "year": 2041
    },
    {
        "id": 55704,
        "zoneCode": "cei",
        "value": 230.64051818847656,
        "year": 2040
    },
    {
        "id": 55705,
        "zoneCode": "cei",
        "value": 237.924072265625,
        "year": 2039
    },
    {
        "id": 55706,
        "zoneCode": "cei",
        "value": 245.89988708496094,
        "year": 2038
    },
    {
        "id": 55707,
        "zoneCode": "cei",
        "value": 254.5671844482422,
        "year": 2037
    },
    {
        "id": 55708,
        "zoneCode": "cei",
        "value": 263.8060302734375,
        "year": 2036
    },
    {
        "id": 55709,
        "zoneCode": "cei",
        "value": 271.89752197265625,
        "year": 2035
    },
    {
        "id": 55710,
        "zoneCode": "cei",
        "value": 281.3047790527344,
        "year": 2034
    },
    {
        "id": 55711,
        "zoneCode": "cei",
        "value": 292.36663818359375,
        "year": 2033
    },
    {
        "id": 55712,
        "zoneCode": "cei",
        "value": 303.9190368652344,
        "year": 2032
    },
    {
        "id": 55713,
        "zoneCode": "cei",
        "value": 315.8445129394531,
        "year": 2031
    },
    {
        "id": 55714,
        "zoneCode": "cei",
        "value": 326.4365539550781,
        "year": 2030
    },
    {
        "id": 55715,
        "zoneCode": "cei",
        "value": 332.7667236328125,
        "year": 2029
    },
    {
        "id": 55716,
        "zoneCode": "cei",
        "value": 336.7615966796875,
        "year": 2028
    },
    {
        "id": 55717,
        "zoneCode": "cei",
        "value": 342.4203186035156,
        "year": 2027
    },
    {
        "id": 55718,
        "zoneCode": "cei",
        "value": 346.5186462402344,
        "year": 2026
    },
    {
        "id": 55719,
        "zoneCode": "cei",
        "value": 348.25518798828125,
        "year": 2025
    },
    {
        "id": 55720,
        "zoneCode": "cei",
        "value": 352.4698791503906,
        "year": 2024
    },
    {
        "id": 55721,
        "zoneCode": "cei",
        "value": 355.3066101074219,
        "year": 2023
    },
    {
        "id": 55722,
        "zoneCode": "cei",
        "value": 351.6553039550781,
        "year": 2022
    },
    {
        "id": 55723,
        "zoneCode": "cei",
        "value": 353.48394775390625,
        "year": 2021
    },
    {
        "id": 55724,
        "zoneCode": "cei",
        "value": 351.7855224609375,
        "year": 2020
    },
    {
        "id": 55725,
        "zoneCode": "cei",
        "value": 363.76165771484375,
        "year": 2019
    },
    {
        "id": 55726,
        "zoneCode": "cei",
        "value": 370.0197448730469,
        "year": 2018
    },
    {
        "id": 55727,
        "zoneCode": "cei",
        "value": 363.4312744140625,
        "year": 2017
    },
    {
        "id": 55728,
        "zoneCode": "cei",
        "value": 370.3798522949219,
        "year": 2016
    },
    {
        "id": 55729,
        "zoneCode": "cei",
        "value": 379.7167053222656,
        "year": 2015
    },
    {
        "id": 55730,
        "zoneCode": "cei",
        "value": 388.5240783691406,
        "year": 2014
    },
    {
        "id": 55731,
        "zoneCode": "cei",
        "value": 411.3493957519531,
        "year": 2013
    },
    {
        "id": 55732,
        "zoneCode": "cei",
        "value": 411.7649841308594,
        "year": 2012
    },
    {
        "id": 55733,
        "zoneCode": "cei",
        "value": 415.21685791015625,
        "year": 2011
    },
    {
        "id": 55734,
        "zoneCode": "cei",
        "value": 395.82891845703125,
        "year": 2010
    },
    {
        "id": 55735,
        "zoneCode": "cei",
        "value": 391.5403137207031,
        "year": 2009
    },
    {
        "id": 55736,
        "zoneCode": "cei",
        "value": 410.5509338378906,
        "year": 2008
    },
    {
        "id": 55737,
        "zoneCode": "cei",
        "value": 415.00439453125,
        "year": 2007
    },
    {
        "id": 55738,
        "zoneCode": "cei",
        "value": 430.82452392578125,
        "year": 2006
    },
    {
        "id": 55739,
        "zoneCode": "cei",
        "value": 413.35888671875,
        "year": 2005
    },
    {
        "id": 55740,
        "zoneCode": "cei",
        "value": 408.1891174316406,
        "year": 2004
    },
    {
        "id": 55741,
        "zoneCode": "cei",
        "value": 427.37921142578125,
        "year": 2003
    },
    {
        "id": 55742,
        "zoneCode": "cei",
        "value": 424.46929931640625,
        "year": 2002
    },
    {
        "id": 55743,
        "zoneCode": "cei",
        "value": 418.46142578125,
        "year": 2001
    },
    {
        "id": 55744,
        "zoneCode": "cei",
        "value": 431.43963623046875,
        "year": 2000
    },
    {
        "id": 55898,
        "zoneCode": "asiepac",
        "value": 45.80605697631836,
        "year": 2050
    },
    {
        "id": 55899,
        "zoneCode": "asiepac",
        "value": 49.44337463378906,
        "year": 2049
    },
    {
        "id": 55900,
        "zoneCode": "asiepac",
        "value": 53.59122085571289,
        "year": 2048
    },
    {
        "id": 55901,
        "zoneCode": "asiepac",
        "value": 57.664886474609375,
        "year": 2047
    },
    {
        "id": 55902,
        "zoneCode": "asiepac",
        "value": 62.46073532104492,
        "year": 2046
    },
    {
        "id": 55903,
        "zoneCode": "asiepac",
        "value": 67.57759094238281,
        "year": 2045
    },
    {
        "id": 55904,
        "zoneCode": "asiepac",
        "value": 73.10198211669922,
        "year": 2044
    },
    {
        "id": 55905,
        "zoneCode": "asiepac",
        "value": 78.97801971435547,
        "year": 2043
    },
    {
        "id": 55906,
        "zoneCode": "asiepac",
        "value": 85.92991638183594,
        "year": 2042
    },
    {
        "id": 55907,
        "zoneCode": "asiepac",
        "value": 94.35984802246094,
        "year": 2041
    },
    {
        "id": 55908,
        "zoneCode": "asiepac",
        "value": 105.13079071044922,
        "year": 2040
    },
    {
        "id": 55909,
        "zoneCode": "asiepac",
        "value": 115.54386138916016,
        "year": 2039
    },
    {
        "id": 55910,
        "zoneCode": "asiepac",
        "value": 129.90077209472656,
        "year": 2038
    },
    {
        "id": 55911,
        "zoneCode": "asiepac",
        "value": 153.36924743652344,
        "year": 2037
    },
    {
        "id": 55912,
        "zoneCode": "asiepac",
        "value": 188.3882598876953,
        "year": 2036
    },
    {
        "id": 55913,
        "zoneCode": "asiepac",
        "value": 215.97154235839844,
        "year": 2035
    },
    {
        "id": 55914,
        "zoneCode": "asiepac",
        "value": 249.00860595703125,
        "year": 2034
    },
    {
        "id": 55915,
        "zoneCode": "asiepac",
        "value": 285.0501403808594,
        "year": 2033
    },
    {
        "id": 55916,
        "zoneCode": "asiepac",
        "value": 322.42596435546875,
        "year": 2032
    },
    {
        "id": 55917,
        "zoneCode": "asiepac",
        "value": 363.90740966796875,
        "year": 2031
    },
    {
        "id": 55918,
        "zoneCode": "asiepac",
        "value": 391.5081787109375,
        "year": 2030
    },
    {
        "id": 55919,
        "zoneCode": "asiepac",
        "value": 425.1634826660156,
        "year": 2029
    },
    {
        "id": 55920,
        "zoneCode": "asiepac",
        "value": 444.9237060546875,
        "year": 2028
    },
    {
        "id": 55921,
        "zoneCode": "asiepac",
        "value": 461.9432373046875,
        "year": 2027
    },
    {
        "id": 55922,
        "zoneCode": "asiepac",
        "value": 474.6278991699219,
        "year": 2026
    },
    {
        "id": 55923,
        "zoneCode": "asiepac",
        "value": 489.2290344238281,
        "year": 2025
    },
    {
        "id": 55924,
        "zoneCode": "asiepac",
        "value": 508.525146484375,
        "year": 2024
    },
    {
        "id": 55925,
        "zoneCode": "asiepac",
        "value": 522.5677490234375,
        "year": 2023
    },
    {
        "id": 55926,
        "zoneCode": "asiepac",
        "value": 535.3504028320312,
        "year": 2022
    },
    {
        "id": 55927,
        "zoneCode": "asiepac",
        "value": 549.4174194335938,
        "year": 2021
    },
    {
        "id": 55928,
        "zoneCode": "asiepac",
        "value": 550.3203735351562,
        "year": 2020
    },
    {
        "id": 55929,
        "zoneCode": "asiepac",
        "value": 562.0466918945312,
        "year": 2019
    },
    {
        "id": 55930,
        "zoneCode": "asiepac",
        "value": 573.2800903320312,
        "year": 2018
    },
    {
        "id": 55931,
        "zoneCode": "asiepac",
        "value": 572.694580078125,
        "year": 2017
    },
    {
        "id": 55932,
        "zoneCode": "asiepac",
        "value": 577.0948486328125,
        "year": 2016
    },
    {
        "id": 55933,
        "zoneCode": "asiepac",
        "value": 592.8641967773438,
        "year": 2015
    },
    {
        "id": 55934,
        "zoneCode": "asiepac",
        "value": 608.3257446289062,
        "year": 2014
    },
    {
        "id": 55935,
        "zoneCode": "asiepac",
        "value": 623.0870971679688,
        "year": 2013
    },
    {
        "id": 55936,
        "zoneCode": "asiepac",
        "value": 635.8468017578125,
        "year": 2012
    },
    {
        "id": 55937,
        "zoneCode": "asiepac",
        "value": 634.0834350585938,
        "year": 2011
    },
    {
        "id": 55938,
        "zoneCode": "asiepac",
        "value": 618.7373046875,
        "year": 2010
    },
    {
        "id": 55939,
        "zoneCode": "asiepac",
        "value": 633.6193237304688,
        "year": 2009
    },
    {
        "id": 55940,
        "zoneCode": "asiepac",
        "value": 634.6092529296875,
        "year": 2008
    },
    {
        "id": 55941,
        "zoneCode": "asiepac",
        "value": 645.3624267578125,
        "year": 2007
    },
    {
        "id": 55942,
        "zoneCode": "asiepac",
        "value": 645.9161376953125,
        "year": 2006
    },
    {
        "id": 55943,
        "zoneCode": "asiepac",
        "value": 644.2575073242188,
        "year": 2005
    },
    {
        "id": 55944,
        "zoneCode": "asiepac",
        "value": 691.9839477539062,
        "year": 2004
    },
    {
        "id": 55945,
        "zoneCode": "asiepac",
        "value": 701.348876953125,
        "year": 2003
    },
    {
        "id": 55946,
        "zoneCode": "asiepac",
        "value": 685.1141967773438,
        "year": 2002
    },
    {
        "id": 55947,
        "zoneCode": "asiepac",
        "value": 668.6812133789062,
        "year": 2001
    },
    {
        "id": 55948,
        "zoneCode": "asiepac",
        "value": 670.9219970703125,
        "year": 2000
    },
    {
        "id": 56000,
        "zoneCode": "amnord",
        "value": -3.576688528060913,
        "year": 2050
    },
    {
        "id": 56001,
        "zoneCode": "amnord",
        "value": -3.091428518295288,
        "year": 2049
    },
    {
        "id": 56002,
        "zoneCode": "amnord",
        "value": -2.7909905910491943,
        "year": 2048
    },
    {
        "id": 56003,
        "zoneCode": "amnord",
        "value": -2.0843307971954346,
        "year": 2047
    },
    {
        "id": 56004,
        "zoneCode": "amnord",
        "value": -1.5926215648651123,
        "year": 2046
    },
    {
        "id": 56005,
        "zoneCode": "amnord",
        "value": -1.0401018857955933,
        "year": 2045
    },
    {
        "id": 56006,
        "zoneCode": "amnord",
        "value": -0.7415287494659424,
        "year": 2044
    },
    {
        "id": 56007,
        "zoneCode": "amnord",
        "value": -0.7372171878814697,
        "year": 2043
    },
    {
        "id": 56008,
        "zoneCode": "amnord",
        "value": 0.21078844368457794,
        "year": 2042
    },
    {
        "id": 56009,
        "zoneCode": "amnord",
        "value": 0.7631570100784302,
        "year": 2041
    },
    {
        "id": 56010,
        "zoneCode": "amnord",
        "value": 2.347449779510498,
        "year": 2040
    },
    {
        "id": 56011,
        "zoneCode": "amnord",
        "value": 5.109537124633789,
        "year": 2039
    },
    {
        "id": 56012,
        "zoneCode": "amnord",
        "value": 9.84091854095459,
        "year": 2038
    },
    {
        "id": 56013,
        "zoneCode": "amnord",
        "value": 17.789810180664062,
        "year": 2037
    },
    {
        "id": 56014,
        "zoneCode": "amnord",
        "value": 29.117374420166016,
        "year": 2036
    },
    {
        "id": 56015,
        "zoneCode": "amnord",
        "value": 48.50787353515625,
        "year": 2035
    },
    {
        "id": 56016,
        "zoneCode": "amnord",
        "value": 71.98379516601562,
        "year": 2034
    },
    {
        "id": 56017,
        "zoneCode": "amnord",
        "value": 99.10089111328125,
        "year": 2033
    },
    {
        "id": 56018,
        "zoneCode": "amnord",
        "value": 124.8427505493164,
        "year": 2032
    },
    {
        "id": 56019,
        "zoneCode": "amnord",
        "value": 148.25576782226562,
        "year": 2031
    },
    {
        "id": 56020,
        "zoneCode": "amnord",
        "value": 167.7024688720703,
        "year": 2030
    },
    {
        "id": 56021,
        "zoneCode": "amnord",
        "value": 187.11195373535156,
        "year": 2029
    },
    {
        "id": 56022,
        "zoneCode": "amnord",
        "value": 205.59927368164062,
        "year": 2028
    },
    {
        "id": 56023,
        "zoneCode": "amnord",
        "value": 221.48663330078125,
        "year": 2027
    },
    {
        "id": 56024,
        "zoneCode": "amnord",
        "value": 233.5232696533203,
        "year": 2026
    },
    {
        "id": 56025,
        "zoneCode": "amnord",
        "value": 246.46316528320312,
        "year": 2025
    },
    {
        "id": 56026,
        "zoneCode": "amnord",
        "value": 260.67572021484375,
        "year": 2024
    },
    {
        "id": 56027,
        "zoneCode": "amnord",
        "value": 287.8446960449219,
        "year": 2023
    },
    {
        "id": 56028,
        "zoneCode": "amnord",
        "value": 313.61700439453125,
        "year": 2022
    },
    {
        "id": 56029,
        "zoneCode": "amnord",
        "value": 325.5036926269531,
        "year": 2021
    },
    {
        "id": 56030,
        "zoneCode": "amnord",
        "value": 312.9944763183594,
        "year": 2020
    },
    {
        "id": 56031,
        "zoneCode": "amnord",
        "value": 340.06219482421875,
        "year": 2019
    },
    {
        "id": 56032,
        "zoneCode": "amnord",
        "value": 361.4830322265625,
        "year": 2018
    },
    {
        "id": 56033,
        "zoneCode": "amnord",
        "value": 373.7364501953125,
        "year": 2017
    },
    {
        "id": 56034,
        "zoneCode": "amnord",
        "value": 384.7852478027344,
        "year": 2016
    },
    {
        "id": 56035,
        "zoneCode": "amnord",
        "value": 403.08355712890625,
        "year": 2015
    },
    {
        "id": 56036,
        "zoneCode": "amnord",
        "value": 430.45184326171875,
        "year": 2014
    },
    {
        "id": 56037,
        "zoneCode": "amnord",
        "value": 433.94036865234375,
        "year": 2013
    },
    {
        "id": 56038,
        "zoneCode": "amnord",
        "value": 435.3742370605469,
        "year": 2012
    },
    {
        "id": 56039,
        "zoneCode": "amnord",
        "value": 455.55438232421875,
        "year": 2011
    },
    {
        "id": 56040,
        "zoneCode": "amnord",
        "value": 477.6340026855469,
        "year": 2010
    },
    {
        "id": 56041,
        "zoneCode": "amnord",
        "value": 470.4503479003906,
        "year": 2009
    },
    {
        "id": 56042,
        "zoneCode": "amnord",
        "value": 496.61639404296875,
        "year": 2008
    },
    {
        "id": 56043,
        "zoneCode": "amnord",
        "value": 513.6487426757812,
        "year": 2007
    },
    {
        "id": 56044,
        "zoneCode": "amnord",
        "value": 505.58197021484375,
        "year": 2006
    },
    {
        "id": 56045,
        "zoneCode": "amnord",
        "value": 519.51318359375,
        "year": 2005
    },
    {
        "id": 56046,
        "zoneCode": "amnord",
        "value": 521.44091796875,
        "year": 2004
    },
    {
        "id": 56047,
        "zoneCode": "amnord",
        "value": 526.3612670898438,
        "year": 2003
    },
    {
        "id": 56048,
        "zoneCode": "amnord",
        "value": 520.7697143554688,
        "year": 2002
    },
    {
        "id": 56049,
        "zoneCode": "amnord",
        "value": 583.2046508789062,
        "year": 2001
    },
    {
        "id": 56050,
        "zoneCode": "amnord",
        "value": 550.7662353515625,
        "year": 2000
    },
    {
        "id": 56051,
        "zoneCode": "aml",
        "value": 36.57740020751953,
        "year": 2050
    },
    {
        "id": 56052,
        "zoneCode": "aml",
        "value": 39.909912109375,
        "year": 2049
    },
    {
        "id": 56053,
        "zoneCode": "aml",
        "value": 43.63774490356445,
        "year": 2048
    },
    {
        "id": 56054,
        "zoneCode": "aml",
        "value": 47.34086227416992,
        "year": 2047
    },
    {
        "id": 56055,
        "zoneCode": "aml",
        "value": 51.31424331665039,
        "year": 2046
    },
    {
        "id": 56056,
        "zoneCode": "aml",
        "value": 55.483985900878906,
        "year": 2045
    },
    {
        "id": 56057,
        "zoneCode": "aml",
        "value": 60.26801681518555,
        "year": 2044
    },
    {
        "id": 56058,
        "zoneCode": "aml",
        "value": 65.99095916748047,
        "year": 2043
    },
    {
        "id": 56059,
        "zoneCode": "aml",
        "value": 72.89627838134766,
        "year": 2042
    },
    {
        "id": 56060,
        "zoneCode": "aml",
        "value": 80.43440246582031,
        "year": 2041
    },
    {
        "id": 56061,
        "zoneCode": "aml",
        "value": 88.4236068725586,
        "year": 2040
    },
    {
        "id": 56062,
        "zoneCode": "aml",
        "value": 97.0356674194336,
        "year": 2039
    },
    {
        "id": 56063,
        "zoneCode": "aml",
        "value": 106.52745819091797,
        "year": 2038
    },
    {
        "id": 56064,
        "zoneCode": "aml",
        "value": 115.66697692871094,
        "year": 2037
    },
    {
        "id": 56065,
        "zoneCode": "aml",
        "value": 124.86997985839844,
        "year": 2036
    },
    {
        "id": 56066,
        "zoneCode": "aml",
        "value": 134.8919219970703,
        "year": 2035
    },
    {
        "id": 56067,
        "zoneCode": "aml",
        "value": 145.98593139648438,
        "year": 2034
    },
    {
        "id": 56068,
        "zoneCode": "aml",
        "value": 156.75466918945312,
        "year": 2033
    },
    {
        "id": 56069,
        "zoneCode": "aml",
        "value": 165.86582946777344,
        "year": 2032
    },
    {
        "id": 56070,
        "zoneCode": "aml",
        "value": 172.67601013183594,
        "year": 2031
    },
    {
        "id": 56071,
        "zoneCode": "aml",
        "value": 176.90628051757812,
        "year": 2030
    },
    {
        "id": 56072,
        "zoneCode": "aml",
        "value": 181.06031799316406,
        "year": 2029
    },
    {
        "id": 56073,
        "zoneCode": "aml",
        "value": 182.64483642578125,
        "year": 2028
    },
    {
        "id": 56074,
        "zoneCode": "aml",
        "value": 184.43121337890625,
        "year": 2027
    },
    {
        "id": 56075,
        "zoneCode": "aml",
        "value": 184.65536499023438,
        "year": 2026
    },
    {
        "id": 56076,
        "zoneCode": "aml",
        "value": 183.83526611328125,
        "year": 2025
    },
    {
        "id": 56077,
        "zoneCode": "aml",
        "value": 182.96951293945312,
        "year": 2024
    },
    {
        "id": 56078,
        "zoneCode": "aml",
        "value": 192.59664916992188,
        "year": 2023
    },
    {
        "id": 56079,
        "zoneCode": "aml",
        "value": 191.3667449951172,
        "year": 2022
    },
    {
        "id": 56080,
        "zoneCode": "aml",
        "value": 225.31056213378906,
        "year": 2021
    },
    {
        "id": 56081,
        "zoneCode": "aml",
        "value": 214.0611572265625,
        "year": 2020
    },
    {
        "id": 56082,
        "zoneCode": "aml",
        "value": 241.74571228027344,
        "year": 2019
    },
    {
        "id": 56083,
        "zoneCode": "aml",
        "value": 238.59722900390625,
        "year": 2018
    },
    {
        "id": 56084,
        "zoneCode": "aml",
        "value": 257.6601867675781,
        "year": 2017
    },
    {
        "id": 56085,
        "zoneCode": "aml",
        "value": 270.9376525878906,
        "year": 2016
    },
    {
        "id": 56086,
        "zoneCode": "aml",
        "value": 281.1525573730469,
        "year": 2015
    },
    {
        "id": 56087,
        "zoneCode": "aml",
        "value": 280.04608154296875,
        "year": 2014
    },
    {
        "id": 56088,
        "zoneCode": "aml",
        "value": 272.48760986328125,
        "year": 2013
    },
    {
        "id": 56089,
        "zoneCode": "aml",
        "value": 267.0120544433594,
        "year": 2012
    },
    {
        "id": 56090,
        "zoneCode": "aml",
        "value": 250.43287658691406,
        "year": 2011
    },
    {
        "id": 56091,
        "zoneCode": "aml",
        "value": 255.28195190429688,
        "year": 2010
    },
    {
        "id": 56092,
        "zoneCode": "aml",
        "value": 248.41943359375,
        "year": 2009
    },
    {
        "id": 56093,
        "zoneCode": "aml",
        "value": 248.1250762939453,
        "year": 2008
    },
    {
        "id": 56094,
        "zoneCode": "aml",
        "value": 252.6561737060547,
        "year": 2007
    },
    {
        "id": 56095,
        "zoneCode": "aml",
        "value": 257.55242919921875,
        "year": 2006
    },
    {
        "id": 56096,
        "zoneCode": "aml",
        "value": 262.3931884765625,
        "year": 2005
    },
    {
        "id": 56097,
        "zoneCode": "aml",
        "value": 262.96246337890625,
        "year": 2004
    },
    {
        "id": 56098,
        "zoneCode": "aml",
        "value": 269.8221740722656,
        "year": 2003
    },
    {
        "id": 56099,
        "zoneCode": "aml",
        "value": 271.1632385253906,
        "year": 2002
    },
    {
        "id": 56100,
        "zoneCode": "aml",
        "value": 276.1724548339844,
        "year": 2001
    },
    {
        "id": 56101,
        "zoneCode": "aml",
        "value": 266.2733154296875,
        "year": 2000
    },
    {
        "id": 56102,
        "zoneCode": "afriq",
        "value": 109.885009765625,
        "year": 2050
    },
    {
        "id": 56103,
        "zoneCode": "afriq",
        "value": 117.27959442138672,
        "year": 2049
    },
    {
        "id": 56104,
        "zoneCode": "afriq",
        "value": 124.20110321044922,
        "year": 2048
    },
    {
        "id": 56105,
        "zoneCode": "afriq",
        "value": 131.4656524658203,
        "year": 2047
    },
    {
        "id": 56106,
        "zoneCode": "afriq",
        "value": 139.08511352539062,
        "year": 2046
    },
    {
        "id": 56107,
        "zoneCode": "afriq",
        "value": 147.064453125,
        "year": 2045
    },
    {
        "id": 56108,
        "zoneCode": "afriq",
        "value": 155.4414520263672,
        "year": 2044
    },
    {
        "id": 56109,
        "zoneCode": "afriq",
        "value": 164.56858825683594,
        "year": 2043
    },
    {
        "id": 56110,
        "zoneCode": "afriq",
        "value": 174.42723083496094,
        "year": 2042
    },
    {
        "id": 56111,
        "zoneCode": "afriq",
        "value": 185.23977661132812,
        "year": 2041
    },
    {
        "id": 56112,
        "zoneCode": "afriq",
        "value": 197.36117553710938,
        "year": 2040
    },
    {
        "id": 56113,
        "zoneCode": "afriq",
        "value": 207.18002319335938,
        "year": 2039
    },
    {
        "id": 56114,
        "zoneCode": "afriq",
        "value": 217.38560485839844,
        "year": 2038
    },
    {
        "id": 56115,
        "zoneCode": "afriq",
        "value": 228.620361328125,
        "year": 2037
    },
    {
        "id": 56116,
        "zoneCode": "afriq",
        "value": 241.91116333007812,
        "year": 2036
    },
    {
        "id": 56117,
        "zoneCode": "afriq",
        "value": 256.9477233886719,
        "year": 2035
    },
    {
        "id": 56118,
        "zoneCode": "afriq",
        "value": 273.9213562011719,
        "year": 2034
    },
    {
        "id": 56119,
        "zoneCode": "afriq",
        "value": 292.80908203125,
        "year": 2033
    },
    {
        "id": 56120,
        "zoneCode": "afriq",
        "value": 315.5052795410156,
        "year": 2032
    },
    {
        "id": 56121,
        "zoneCode": "afriq",
        "value": 342.439453125,
        "year": 2031
    },
    {
        "id": 56122,
        "zoneCode": "afriq",
        "value": 373.625732421875,
        "year": 2030
    },
    {
        "id": 56123,
        "zoneCode": "afriq",
        "value": 407.8556823730469,
        "year": 2029
    },
    {
        "id": 56124,
        "zoneCode": "afriq",
        "value": 428.05340576171875,
        "year": 2028
    },
    {
        "id": 56125,
        "zoneCode": "afriq",
        "value": 449.16571044921875,
        "year": 2027
    },
    {
        "id": 56126,
        "zoneCode": "afriq",
        "value": 468.53912353515625,
        "year": 2026
    },
    {
        "id": 56127,
        "zoneCode": "afriq",
        "value": 487.43414306640625,
        "year": 2025
    },
    {
        "id": 56128,
        "zoneCode": "afriq",
        "value": 506.1485595703125,
        "year": 2024
    },
    {
        "id": 56129,
        "zoneCode": "afriq",
        "value": 521.5359497070312,
        "year": 2023
    },
    {
        "id": 56130,
        "zoneCode": "afriq",
        "value": 534.8726196289062,
        "year": 2022
    },
    {
        "id": 56131,
        "zoneCode": "afriq",
        "value": 531.9965209960938,
        "year": 2021
    },
    {
        "id": 56132,
        "zoneCode": "afriq",
        "value": 536.9752197265625,
        "year": 2020
    },
    {
        "id": 56133,
        "zoneCode": "afriq",
        "value": 581.3807983398438,
        "year": 2019
    },
    {
        "id": 56134,
        "zoneCode": "afriq",
        "value": 567.04150390625,
        "year": 2018
    },
    {
        "id": 56135,
        "zoneCode": "afriq",
        "value": 576.8739013671875,
        "year": 2017
    },
    {
        "id": 56136,
        "zoneCode": "afriq",
        "value": 590.9931640625,
        "year": 2016
    },
    {
        "id": 56137,
        "zoneCode": "afriq",
        "value": 599.3434448242188,
        "year": 2015
    },
    {
        "id": 56138,
        "zoneCode": "afriq",
        "value": 622.886962890625,
        "year": 2014
    },
    {
        "id": 56139,
        "zoneCode": "afriq",
        "value": 607.2307739257812,
        "year": 2013
    },
    {
        "id": 56140,
        "zoneCode": "afriq",
        "value": 608.480712890625,
        "year": 2012
    },
    {
        "id": 56141,
        "zoneCode": "afriq",
        "value": 597.8842163085938,
        "year": 2011
    },
    {
        "id": 56142,
        "zoneCode": "afriq",
        "value": 612.1875610351562,
        "year": 2010
    },
    {
        "id": 56143,
        "zoneCode": "afriq",
        "value": 638.1846313476562,
        "year": 2009
    },
    {
        "id": 56144,
        "zoneCode": "afriq",
        "value": 664.6381225585938,
        "year": 2008
    },
    {
        "id": 56145,
        "zoneCode": "afriq",
        "value": 615.7474975585938,
        "year": 2007
    },
    {
        "id": 56146,
        "zoneCode": "afriq",
        "value": 630.6334838867188,
        "year": 2006
    },
    {
        "id": 56147,
        "zoneCode": "afriq",
        "value": 641.8660278320312,
        "year": 2005
    },
    {
        "id": 56148,
        "zoneCode": "afriq",
        "value": 654.6971435546875,
        "year": 2004
    },
    {
        "id": 56149,
        "zoneCode": "afriq",
        "value": 635.1972045898438,
        "year": 2003
    },
    {
        "id": 56150,
        "zoneCode": "afriq",
        "value": 616.7400512695312,
        "year": 2002
    },
    {
        "id": 56151,
        "zoneCode": "afriq",
        "value": 629.16845703125,
        "year": 2001
    },
    {
        "id": 56152,
        "zoneCode": "afriq",
        "value": 661.426513671875,
        "year": 2000
    }
]

// For easier access we create a new data structure that makes access a lot faster
function transformData(data) {
    return data.reduce((acc, item) => {
        if (!acc[item.year]) {
            acc[item.year] = {};
        }
        acc[item.year][item.zoneCode] = item;
        return acc;
    }, {});
}

window.energy_impact_data_access = transformData(energy_impact_data);

// This is only for historic reasons not really used anymore.
function getGridCO2ForYear(date, zone) {
    const record = energy_impact_data.find(item => item.year === date.getFullYear() && item.zoneCode === zone);
    if (!record) {
        return null;
    }
    return record.value;
}


// module.exports = {
//     energy_impact_data: energy_impact_data
// }