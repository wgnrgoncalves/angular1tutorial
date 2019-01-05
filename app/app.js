var phonecatApp = angular.module('phonecatApp', []);
phonecatApp
    .controller('PhoneListController',
        function PhoneListController($scope) {
            $scope.phones = [
                {
                    name: "Nexus S",
                    snippet: 'Fast  just got faster with Nexsus S.'
                },
                {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
            $scope.name = 'world';

        }
    ).controller('OutraLista',
        function OutraLista($scope) {
            $scope.carros = [
                {
                    nome: 'Celta',
                    marca: 'GM'
                },
                {
                    nome: 'Fusca',
                    marca: 'VW'
                },
                {
                    nome: 'Civic',
                    marca: 'Honda'
                },
                {
                    nome: 'Uno',
                    marca: 'Fiat'
                }
            ]
        });