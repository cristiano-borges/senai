angular.module('senai', ['ngMessages', 'ui.growl']);

angular.module('senai').controller('IndexConroller', IndexController);


IndexController.$inject = ['$scope', 'AlertaService'];

function IndexController($scope, AlertaService) {
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar() {
        if ($scope.myForm.$invalid === true) {
            AlertaService.showAlert('Observe', 'Verifique os campos inválidos');
            return;
        }
        $scope.listaDePessoas.push($scope.entidade);
        limpar();

        AlertaService.showOk('Observe', 'Registro salvo com sucesso');
    }

    function limpar() {
        $scope.entidade = {};
        $scope.myForm.$setPristine();
    }
}
