/**
 *
 * Created by matt on 11/15/14.
 */
angular.module('splitcontainer.directive', [])
    .controller('SplitContainerController', ['$scope', function($scope) {
        $scope.split = {
            direction: "none",
            side:"left",
            level:0,
            gridId:0,
            splits:[]
        };
        $scope.splitVertical = function(split){
            split.direction="vertical";
            split.splits=[{
                direction:"none",
                side:"left",
                gridId:split.gridId+"0",
                level:split.level+1,
                splits:[]
            },{
                direction:"none",
                side:"right",
                gridId:split.gridId+"1",
                level:split.level+1,
                splits:[]
            }];
        };
        $scope.splitHorizontal = function(split){
            split.direction="horizontal";
            split.splits=[{
                direction:"none",
                side:"top",
                gridId:split.gridId+"0",
                level:split.level+1,
                splits:[]
            },{
                direction:"none",
                side:"bottom",
                gridId:split.gridId+"1",
                level:split.level+1,
                splits:[]
            }];
        };
    }])
    .directive('splitcontainer', function($compile){

        function link($scope, $element, $attrs){
            if($attrs.splitcontainerDirection) {
                $scope.split.direction= $attrs.splitcontainerDirection;
            }

        };

        return {
            link: link,
            transclude: true,
            templateUrl: function ($element, $attrs) {
                return 'assets/templates/splitContainer.html'
            },
            compile: function (tElement, tAttr, transclude) {
                //We are removing the contents/innerHTML from the element we are going to be applying the
                //directive to and saving it to adding it below to the $compile call as the template
                var contents = tElement.contents().remove();
                var compiledContents;
                return function (scope, iElement, iAttr) {

                    if (!compiledContents) {
                        //Get the link function with the contents frome top level template with
                        //the transclude
                        compiledContents = $compile(contents, transclude);
                    }
                    //Call the link function to link the given scope and
                    //a Clone Attach Function, http://docs.angularjs.org/api/ng.$compile :
                    // "Calling the linking function returns the element of the template.
                    //    It is either the original element passed in,
                    //    or the clone of the element if the cloneAttachFn is provided."
                    compiledContents(scope, function (clone, scope) {
                        //Appending the cloned template to the instance element, "iElement",
                        //on which the directive is to used.
                        iElement.append(clone);
                    });
                };
            }
        }
    });
