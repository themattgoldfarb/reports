/**
 * Created by matt on 11/15/14.
 */
angular.module('section.directive', [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.section = {
            title: "change me!"
        };
    }])
    .directive('section', function($document){

        function link($scope, $element, $attrs){
            if($attrs.sectionTitle) {
                $scope.section.title = $attrs.sectionTitle;
            }

            $element.find(".titleEditButton").click(function(){
                $element.find(".sectionTitle").toggleClass("edit")
            })

          //  $element.on('click', function(event){
          //      alert($attrs.sectionTitle)
          //  });
        };

        return {
            link: link,
            templateUrl:'assets/templates/sectionTemplate.html'
        };
    });