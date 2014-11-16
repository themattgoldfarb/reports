/**
 * from stackOverflow http://stackoverflow.com/questions/18368485/angular-js-resizable-div-directive
 */
angular.module('mc.resizer', [])

    .directive('resizer', function($document) {

        var link = function($scope, $element, $attrs) {

            $element.on('mousedown', function(event) {
                event.preventDefault();

                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });
            $scope.direction=$attrs.resizerdirection;

            $element.addClass($scope.direction+"SplitBar");

            function mousemove(event) {

                if ($attrs.resizer == 'vertical') {
                    // Handle vertical resizer
                    var x = event.pageX;

                    if ($attrs.resizerMax && x > $attrs.resizerMax) {
                        x = parseInt($attrs.resizerMax);
                    }

                    $container=$element.parent();
                    $element.css({
                        left: 100.0*(x -$container.offset().left)/$container.width()+'%'
                    });

                    $left=$(".gridId-"+$attrs.resizerGridid+"0").parent();
                    $right=$(".gridId-"+$attrs.resizerGridid+"1").parent();
                    $container=$right.parent();
                    $left.css({
                        width: 100.0*(x-$left.offset().left)/$container.width()+'%'
                    });
                    $right.css({
                        width: 100.0*($container.width()-$left.width())/$container.width()+'%'
                    });

                } else {
                    // Handle horizontal resizer
                    var y = event.pageY;

                    $container=$element.parent();
                    $element.css({
                        top: 100.0*(y-$container.offset().top)/$container.height()+"%"
                    });

                    $top=$(".gridId-"+$attrs.resizerGridid+"0").parent();
                    $bottom=$(".gridId-"+$attrs.resizerGridid+"1").parent();
                    $top.css({
                        height: 100.0*(y-$top.offset().top)/$container.height()+"%"
                    });
                    $bottom.css({
                        height: 100.0*($container.height()-$top.height())/$container.height()+"%"
                    });
                }
            }

            function mouseup() {
                $document.unbind('mousemove', mousemove);
                $document.unbind('mouseup', mouseup);
            }

        };
    return {
        link: link,
        template:"<div class='{{direction}}SplitBar'></div>"
    };
});