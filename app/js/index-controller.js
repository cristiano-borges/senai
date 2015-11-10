angular.module('senai', []);

angular.module('senai').controller('IndexConroller', IndexController);

function IndexController ($scope){
    $scope.nome = 'Cristiano';
    $scope.click = function(){
        $scope.nome = 'Senai';
    };
}