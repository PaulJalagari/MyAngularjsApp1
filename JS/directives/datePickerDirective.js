(function(){
  
    var app = angular.module('regionsApp');
    
    app.directive('datePicker', function(){
      return{
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attr, ctrl){
          
          // Format date on load
          ctrl.$formatters.unshift(function(value) {
            if(value && moment(value).isValid()){
                 return moment(new Date(value)).format('MM/DD/YYYY');
            }
            return value;
          })
          
          //Disable Calendar
          scope.$watch(attr.ngDisabled, function (newVal) {
            if(newVal === true)
              $(elm).datepicker("disable");
            else
              $(elm).datepicker("enable");
          });
          
          // Datepicker Settings
          elm.datepicker({
            autoSize: true,
            changeYear: true,
            changeMonth: true,
            dateFormat: attr["dateformat"] || 'mm/dd/yy',
            showOn: 'button',
            buttonText: '<i class="glyphicon glyphicon-calendar"></i>',
            onSelect: function (valu) {
              scope.$apply(function () {
                  ctrl.$setViewValue(valu);
              });
              elm.focus();
            },
            
             beforeShow: function(){
              //  debugger;
              if(attr["minDate"] != null)
                  $(elm).datepicker('option', 'minDate', attr["minDate"]);
                
              if(attr["maxDate"] != null )
                  $(elm).datepicker('option', 'maxDate', attr["maxDate"]);
            },
            
            
          });
        }
      }
    });
    
  })();