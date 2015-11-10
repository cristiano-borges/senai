angular.module('senai', []);

angular.module('senai').controller('IndexConroller', IndexController);

function IndexController ($scope){
    $scope.nome = '';
    $scope.styleDiv = {};
    $scope.myClass = '';
    $scope.myClass2 = '';

    iniciar();

    function iniciar(){
        $scope.$watch('nome', escutaNome)
    }

    function escutaNome(newValue, oldValue){
        if (newValue === oldValue){
            return;
        }

        if (newValue === 'Maria'){
            $scope.styleDiv.backgroundColor = 'red';
            $scope.myClass = 'azul';
            $scope.myClass2 = 'espacoTopo';
        }
        else if (newValue === 'Joao'){
            $scope.styleDiv.backgroundColor = 'blue';
            $scope.myClass = 'vermelho';
            $scope.myClass2 = '';
        }
        else{
            $scope.styleDiv.backgroundColor = '#FFF';
        }
    }
}
