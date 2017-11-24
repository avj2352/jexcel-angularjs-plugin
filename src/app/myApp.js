(function(){
    angular.module('myApp',[]);
    angular.module('myApp')
        .directive('jexcelDirective', jexcelDirective);
    
    function jexcelDirective(){
        return{
            restrict:'E',
            templateUrl:'../src/app/jexcel-template.html',
            controller:function($scope){

            },
            link:function(scope,element,attr){
                var data = [
                    ['Google', 1998, 807.80],
                    ['Apple', 1976, 116.52],
                    ['Yahoo', 1994, 38.66],
                ];
                $('#jExcelDiv').jexcel({data:data,colWidths:[300,80,100]});
            }
        }
    }//end:jexcelDirective
}());//iife