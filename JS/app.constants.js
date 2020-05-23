(function(){
    "use strict";

app.constant('countryList', [
    { name: "USA", ticked: false },
    { name: "India", ticked: false },
    { name: "Australia", ticked: false },
    { name: "Canada", ticked: false },
    { name: "Russia", ticked: false }
    ]);

app.constant('statesList', [
    {
      name: "USA",
      states: [
        { name: "Alabama", ticked: false },
        { name: "California", ticked: false },
        { name: "Illinois", ticked: false }
      ],
      ticked: false
    },
    {
      name: "India",
      states: [
        { name: "Maharashtra", ticked: false },
        { name: "Madhya Pradesh", ticked: false },
        { name: "Rajasthan", ticked: false }
      ],
      ticked: false
    },
    {
      name: "Australia",
      states: [
        { name: "New South Wales", ticked: false },
        { name: "Victoria", ticked: false }
      ],
      ticked: false
    }
])

app.constant('regions', [
    {
      regionId: "1",
      regionName: "NORTHERN",
      ticked: false,
      serviceUnits: [
        {
          serviceUnitId: "1",
          serviceUnitName: "GREAT LAKES",
          subDivisions: [
            {
              subDivisionName: "GENEVA",
              subDivisionId: "1",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "TRENTON",
              subDivisionId: "78",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "CLINTON",
              subDivisionId: "100",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/6/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "2",
          serviceUnitName: "CHICAGO",
          subDivisions: [
            {
              subDivisionName: "GENEVA",
              subDivisionId: "1",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "13",
          serviceUnitName: "GREAT PLAINS",
          subDivisions: [
            {
              subDivisionName: "KEARNEY",
              subDivisionId: "210",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/6/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "17",
          serviceUnitName: "ROCKY MOUNTAIN",
          subDivisions: [
            {
              subDivisionName: "LARAMIE",
              subDivisionId: "255",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "1/29/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "18",
          serviceUnitName: "PACIFIC NORTHWEST",
          subDivisions: [
            {
              subDivisionName: "NAMPA",
              subDivisionId: "807",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "1/29/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "STODDARD LEAD",
              subDivisionId: "808",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "19",
          serviceUnitName: "NORTHERN CALIFORNIA",
          subDivisions: [
            {
              subDivisionName: "WINNEMUCCA",
              subDivisionId: "779",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "6/4/2019",
              ldrCutoverDate: "2/19/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "23",
          serviceUnitName: "COMMUTER OPERATIONS",
          subDivisions: [
            {
              subDivisionName: "GENEVA",
              subDivisionId: "1",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "10/30/2018",
              ptcEnabledFlag: "Y"
            }
          ]
        }
      ]
    },
    {
      regionId: "2",
      regionName: "SOUTHERN",
      ticked: false,
      serviceUnits: [
        {
          serviceUnitId: "5",
          serviceUnitName: "HEARTLAND",
          subDivisions: [
            {
              subDivisionName: "JEFFERSON CITY",
              subDivisionId: "65",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "3/5/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "6",
          serviceUnitName: "MID AMERICA",
          subDivisions: [
            {
              subDivisionName: "MONTEREY",
              subDivisionId: "22",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "8",
          serviceUnitName: "GULF COAST",
          subDivisions: [
            {
              subDivisionName: "MONROE",
              subDivisionId: "450",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/24/2019",
              ldrCutoverDate: "6/18/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "CAMP BEAUREGARD IND LD",
              subDivisionId: "452",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "9",
          serviceUnitName: "HOUSTON",
          subDivisions: [
            {
              subDivisionName: "PALESTINE",
              subDivisionId: "520",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "11",
          serviceUnitName: "TEXOMA",
          subDivisions: [
            {
              subDivisionName: "ENID",
              subDivisionId: "325",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "7/2/2019",
              ldrCutoverDate: "4/16/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "DUNCAN",
              subDivisionId: "326",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "LAWTON",
              subDivisionId: "327",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "WAGONER",
              subDivisionId: "345",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/25/2019",
              ldrCutoverDate: "9/25/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "BLACK FOX POWER PLANT",
              subDivisionId: "346",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "CHEROKEE-NORTHERN",
              subDivisionId: "350",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "12",
          serviceUnitName: "SOUTH TEXAS",
          subDivisions: [
            {
              subDivisionName: "GIDDINGS",
              subDivisionId: "517",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "12/11/2019",
              ldrCutoverDate: "12/11/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "HEARNE",
              subDivisionId: "527",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "10/8/2019",
              ldrCutoverDate: "10/8/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "AUSTIN",
              subDivisionId: "528",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "10/8/2019",
              ldrCutoverDate: "10/8/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "GEORGETOWN IND LD",
              subDivisionId: "529",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "16",
          serviceUnitName: "SUNSET",
          subDivisions: [
            {
              subDivisionName: "TOYAH",
              subDivisionId: "515",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "5/7/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "VALENTINE",
              subDivisionId: "648",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "5/7/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "INTERNATIONAL IND LD",
              subDivisionId: "649",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        },
        {
          serviceUnitId: "20",
          serviceUnitName: "LOS ANGELES",
          subDivisions: [
            {
              subDivisionName: "GILA",
              subDivisionId: "675",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "9/18/2018",
              ldrCutoverDate: "2/19/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "CIMA",
              subDivisionId: "760",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "1/29/2019",
              ptcEnabledFlag: "Y"
            },
            {
              subDivisionName: "MOJAVE",
              subDivisionId: "940",
              ldrActiveFlag: "Y",
              topActiveFlag: "Y",
              topCutoverDate: "8/27/2018",
              ldrCutoverDate: "2/19/2019",
              ptcEnabledFlag: "Y"
            }
          ]
        },
        {
          serviceUnitId: "24",
          serviceUnitName: "ALTON & SOUTHERN",
          subDivisions: [
            {
              subDivisionName: "ALTON & SOUTHERN GATEWAY",
              subDivisionId: "45",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            },
            {
              subDivisionName: "CAHOKIA IND LD (A)",
              subDivisionId: "4240",
              ldrActiveFlag: null,
              topActiveFlag: null,
              topCutoverDate: null,
              ldrCutoverDate: null,
              ptcEnabledFlag: "N"
            }
          ]
        }
      ]
    }
  ]);
}());
