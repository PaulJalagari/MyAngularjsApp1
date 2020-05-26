(function () {
  app.controller('regionsController', regionsController);

  regionsController.$inject = [
    '$scope',
    'regions',
    'countryList',
    'statesList',
    'regionsService',
    '$timeout'
  ]

  function regionsController(
    $scope,
    regions,
    countryList,
    statesList,
    regionsService,
    $timeout
  ) {
    $scope.newRegions = [];
    $scope.regions = regions;
    $scope.selected = '';
    
    /**
     * parses array generated from drop down to cerate an array with inner elements(only states)
     */
    $scope.generateArray = function () {
      $scope.finalStatesArray = [];
      if ($scope.statesNewArray && $scope.statesNewArray.length) {
        angular.forEach($scope.statesNewArray, function (item, index) {
          if (item.states && item.states.length) {
            var i = 0;
            angular.forEach(item.states, function (data, i) {
              if ($scope.finalStatesArray.findIndex(x => x.name == data.name)) {
                $scope.finalStatesArray.push(data);
              }
              i++;
            });
          }
          else {
            $scope.finalStatesArray = [];
          }
        });
      } else {
        $scope.finalStatesArray = [];
      }

    }
    /**
     * @param  {} val
     * takes boolean to decide on the array to be parsed to generate array with states
     */
    $scope.generateArray1 = function (val) {
      $scope.finalStatesArray = [];
      if (!val) {
        $scope.fillArray($scope.statesNewArray);
      } else {
        $scope.fillArray(statesList);
      }
    }
    /**
     * @param  {} inputArray
     * parses the input array to create an array with states
     */
    $scope.fillArray = function (inputArray) {
      if (inputArray && inputArray.length) {
        angular.forEach(inputArray, function (item, index) {
          if (item.states && item.states.length) {
            var i = 0;
            angular.forEach(item.states, function (data, i) {
              if ($scope.finalStatesArray.findIndex(x => x.name == data.name)) {
                $scope.finalStatesArray.push(data);
              }
              i++;
            });
          }
          else {
            $scope.finalStatesArray = [];
          }
        });
      } else {
        $scope.finalStatesArray = [];
      }
    }
    /**
     * returns if statesNewArray scope var is empty
     */
    $scope.checkIfEmpty = function () {
      return $scope.statesNewArray.length === 0;
      $scope.finalStatesArray = [];
    }
    /**
     * empties finalStatesArray scope var
     */
    $scope.emptyArray = function () {
      $scope.finalStatesArray = [];
    }
    /**
     * empties newRegions scope array and also child arrays
     */
    $scope.emptyNewRegions = function () {
      $scope.newRegions = [];
      $scope.selectedServiceUnitsArray = [];
      $scope.finalServiceUnitsArray = [];
      $scope.selectedSubdivisionArray = [];
      $scope.finalSubDivisionsArray = [];
      //uncheck radio buttons
      $scope.uncheckAllRadioButtons();
    }
    /**
     * unchecks all radio buttons
     */
    $scope.uncheckAllRadioButtons = function () {
      angular.forEach(regions, function (val, l) {
        document.getElementById(val.regionId).checked = false;
      });
      document.getElementById("4321").checked = false;
    }
    /**
     * empties selectedServiceUnitsArray scope var and also child arrays
     */
    $scope.emptySelectedServiceUnitsArray = function () {
      if ($scope.selectedServiceUnitsArray && $scope.selectedServiceUnitsArray.length) {
        $scope.unSelectItems($scope.selectedServiceUnitsArray);
      }
      if ($scope.finalSubDivisionsArray && $scope.finalSubDivisionsArray.length) {
        $scope.unSelectItems($scope.finalSubDivisionsArray);
        $scope.finalSubDivisionsArray = [];
      }
      if ($scope.selectedSubdivisionArray && $scope.selectedSubdivisionArray.length) {
        $scope.unSelectItems($scope.selectedSubdivisionArray);
        $scope.selectedSubdivisionArray = [];
      }
    }
    /**
     * @param  {} inputArr
     * unchecks(sets ticked=false) fields of array passed
     */
    $scope.unSelectItems = function (inputArr) {
      if (inputArr && inputArr.length) {
        angular.forEach(inputArr, function (val, i) {
          val.ticked = false;
        })
      }
    }
    /**
     * empties selectedSubdivisionArray scope var
     */
    $scope.emptySelectedSubdivisionArray = function () {
      $scope.selectedSubdivisionArray = [];
    }
    
    $scope.model1 = {
      startDate: new Date(),
      endDate: new Date()
    }
    //radio button
    /**
     * @param  {} item
     * this is executed on click of radio button and is used to generate service units array for Service Units drop-down
     * 
     */
    $scope.radioChanged = function (item) {

      if (item && item.regionName) {
        //disable other things
        angular.forEach(regions, function (value, index) {
          if (value) {
            if (value.regionName && value.regionName === item.regionName) {
              $scope.newRegions = [];
              value.ticked = true;
              $scope.newRegions.push(value);
              $scope.generateServiceUnits(false);
            }
            value.ticked = false;
          }
        });
        item.ticked = true;
      } else if (item && item.toLowerCase() == 'all') {
        angular.forEach(regions, function (value, index) {
          if (value) {
            $scope.newRegions = [];
            value.ticked = true;
            $scope.newRegions.push(value);
            $scope.generateServiceUnits(true);
          }
        });
      }
    };

    //Service UNits
    $scope.finalServiceUnitsArray = [];
    $scope.selectedServiceUnitsArray = [];
    $scope.selectedSubdivisionsArray = [];
    $scope.serviceBasedServiceUnits = [];
    /**
     * @param  {} val
     * takes boolean to decide on what array to use for generating the ServiceUnits array for drop-down
     * 
     */
    $scope.generateServiceUnits = function (val) {
      $scope.finalServiceUnitsArray = [];
      $scope.selectedServiceUnitsArray = [];
      $scope.finalSubDivisionsArray = [];
      $scope.selectedSubdivisionArray = [];
      $scope.emptySelectedServiceUnitsArray();
      $scope.serviceBasedServiceUnits = [];
      $scope.finalServiceUnitsArray = [];
      var isRadioSelected = false;
      if (!val) {
        if ($scope.newRegions && $scope.newRegions.length) {
          //if both are selected
          if ($scope.newRegions.length === $scope.regions.length) {
            //check 'All' radio button
            document.getElementById("4321").checked = true;
            isRadioSelected = true;
          }

          angular.forEach($scope.newRegions, function (val, k) {
            //check radio button
            if (!isRadioSelected) {
              document.getElementById(val.regionId).checked = true;
            }
            if (val && val.regionName) {
              const promise1 = new Promise((resolve, reject) => {
                if (val.regionName.toLowerCase() === "northern") {
                  regionsService.getService1().then(function (response) {
                    $scope.data1 = response.data;
                    resolve($scope.data1);
                  }, function (response) {
                    $scope.data1 = [];
                  });


                } else {
                  regionsService.getService2().then(function (response) {
                    $scope.data2 = response.data;
                    resolve($scope.data2);
                  });
                  //$scope.generateServiceUnitArrayFromServices($scope.data2);
                }
              });
              promise1.then((value) => {
                console.log(value);
                $scope.generateServiceUnitArrayFromServices(value);
              });

            }
          })
          $scope.finalServiceUnitsArray = $scope.serviceBasedServiceUnits;


        } else {
          $scope.uncheckRadioButtons();
          $scope.finalServiceUnitsArray = [];
        }
        //$scope.fillServiceUnitsArray($scope.newRegions);
      } else {
        if ($scope.regions && $scope.regions.length) {

          //check 'All' radio button
          document.getElementById("4321").checked = true;
          isRadioSelected = true;

          angular.forEach($scope.regions, function (val, k) {
            //check radio button
            if (!isRadioSelected) {
              document.getElementById(val.regionId).checked = true;
            }
            if (val && val.regionName) {
              const promise1 = new Promise((resolve, reject) => {
                if (val.regionName.toLowerCase() === "northern") {
                  regionsService.getService1().then(function (response) {
                    $scope.data1 = response.data;
                    resolve($scope.data1);
                  }, function (response) {
                    $scope.data1 = [];
                  });


                } else {
                  regionsService.getService2().then(function (response) {
                    $scope.data2 = response.data;
                    resolve($scope.data2);
                  });
                  //$scope.generateServiceUnitArrayFromServices($scope.data2);
                }
              });
              promise1.then((value) => {
                console.log(value);
                $scope.generateServiceUnitArrayFromServices(value);
              });
            }
          })
          $scope.finalServiceUnitsArray = $scope.serviceBasedServiceUnits;
        } else {
          $scope.uncheckRadioButtons();
          $scope.finalServiceUnitsArray = [];
        }

      }
    }
    /**
     * @param  {} data
     * generates an array based on the service data passed to it for populating drop-down 
     * 
     */
    $scope.generateServiceUnitArrayFromServices = function (data) {
      if (data && data.payload && data.payload.length) {
        angular.forEach(data.payload, function (item, v) {
          if (item.serviceUnits && item.serviceUnits.length) {
            angular.forEach(item.serviceUnits, function (dataItem, i) {
              if (!$scope.serviceBasedServiceUnits.some(x => x.serviceUnitName === dataItem.serviceUnitName)) {
                $scope.serviceBasedServiceUnits.push(dataItem);
              }
            });

          }
        });
      }
    }
    /**
     * @param  {} inputArray
     * @deprecated
     */
    $scope.fillServiceUnitsArray = function (inputArray) {
      var isRadioSelected = false;
      if (inputArray && inputArray.length) {
        //check 'all' radio button
        if (inputArray.length === regions.length) {
          document.getElementById("4321").checked = true;
          isRadioSelected = true;
        }
        angular.forEach(inputArray, function (item, index) {
          //item.selected=item.regionName;//set radio button
          if (!isRadioSelected) {
            document.getElementById(item.regionId).checked = true;
          }
          if (item.serviceUnits && item.serviceUnits.length) {
            var i = 0;
            angular.forEach(item.serviceUnits, function (data, i) {
              if (!$scope.finalServiceUnitsArray.some(x => x.serviceUnitName === data.serviceUnitName)) {
                $scope.finalServiceUnitsArray.push(data);
              }
              i++;
            });
          }
          else {
            $scope.uncheckRadioButtons();
            $scope.finalServiceUnitsArray = [];
          }
        });
      } else {
        //uncheck radio butons
        $scope.uncheckRadioButtons();
        $scope.finalServiceUnitsArray = [];
      }
      if ($scope.finalServiceUnitsArray && $scope.finalServiceUnitsArray.length) {
        angular.forEach($scope.finalServiceUnitsArray, function (item, j) {
          item.ticked = false;
        })
      }
    }
    $scope.uncheckRadioButtons = function () {
      angular.forEach(regions, function (reg, j) {
        document.getElementById(reg.regionId).checked = false;
      })
    }
    //sub divisions
    $scope.finalSubDivisionsArray = [];
    $scope.generateSubdivisions = function (val) {
      // $scope.finalSubDivisionsArray = [];
      if (!val) {
        $scope.fillSubdivisonArray($scope.selectedServiceUnitsArray);
      } else {
        $scope.fillSubdivisonArray($scope.finalServiceUnitsArray);
      }
    }
    $scope.fillSubdivisonArray = function (inputArray) {
      if (inputArray && inputArray.length) {
        angular.forEach(inputArray, function (item, index) {
          if (item.subDivisions && item.subDivisions.length) {
            var i = 0;
            angular.forEach(item.subDivisions, function (data, i) {
              if (!$scope.finalSubDivisionsArray.some(x => x.subDivisionName == data.subDivisionName)) {
                $scope.finalSubDivisionsArray.push(data);
              }
              i++;
            });
          }
          else {
            $scope.finalSubDivisionsArray = [];
          }
        });
      } else {
        $scope.finalSubDivisionsArray = [];
      }

    }


    $scope.finalData = {
      startDate: $scope.model1.startDate,
      endDate: $scope.model1.endDate,
      regionIds: [],
      serviceUnitIds: [],
      subDivisionIds: []
    }
    $scope.insertData = function () {
      // $scope.finalData.startDate=$scope.model1.startDate;
      // $scope.finalData.endDateDate=$scope.model1.endDate;
      if ($scope.newRegions && $scope.newRegions.length) {
        angular.forEach($scope.newRegions, function (reg, l) {
          if (reg.ticked) {
            if (!$scope.finalData.regionIds.length || !$scope.finalData.regionIds.includes(reg.regionId))
              $scope.finalData.regionIds.push(reg.regionId);
          }
        })
      }
      if ($scope.selectedServiceUnitsArray && $scope.selectedServiceUnitsArray.length) {
        angular.forEach($scope.selectedServiceUnitsArray, function (reg, l) {
          if (reg.ticked) {
            if (!$scope.finalData.serviceUnitIds.length || !$scope.finalData.serviceUnitIds.includes(reg.serviceUnitId))
              $scope.finalData.serviceUnitIds.push(reg.serviceUnitId);
          }
        })
      }
      if ($scope.selectedSubdivisionArray && $scope.selectedSubdivisionArray.length) {
        angular.forEach($scope.selectedSubdivisionArray, function (reg, l) {
          if (reg.ticked) {
            if (!$scope.finalData.subDivisionIds.length || !$scope.finalData.subDivisionIds.includes(reg.subDivisionId))
              $scope.finalData.subDivisionIds.push(reg.subDivisionId);
          }
        })
      }
      console.log($scope.finalData);
    }
    /**
     * used for reset functionality to reset page to original
     */
    $scope.resetForm = function () {

      $scope.newRegions = [];
      $scope.selectedServiceUnitsArray = [];
      $scope.finalServiceUnitsArray = [];
      $scope.selectedSubdivisionArray = [];
      $scope.finalSubDivisionsArray = [];
      $scope.model1.startDate = new Date();
      $scope.model1.endDate = new Date();
      $scope.finalData = {
        startDate: new Date(),
        endDate: new Date(),
        regionIds: [],
        serviceUnitIds: [],
        subDivisionIds: []
      }
      // $scope.$broadcast('md-calendar-change', new Date());
      //uncheck radio buttons
      $scope.uncheckAllRadioButtons();
      angular.forEach(regions, function (val, l) {
        if (val && val.ticked) {
          val.ticked = false;
        }
      })
    }
    /**
     * returns if nothing is selected in the dropdown
     */
    $scope.isDisabled = function () {
      if (!$scope.newRegions || !$scope.newRegions.length)
        return true;
    }
  }
}())
