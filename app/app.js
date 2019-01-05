'use strict';
angular.module('myApp', []);

angular.
    module('myApp').
    component('greetUser', {
        template : 'Hello, {{$ctrl.user}}!',
        controller: function GreetUserController(){
            this.user = 'world';
        }
    }).
    component('explicaBruxaria', {
        template : 
            '<h1>Esse é exemplo de componente.</h1>' +
            '<p>Conclusão de como funciona</p>' +
            '<p>o nome do componente é composto por exemplo: "explicaBruxaria". na pagina html fica com o componente &lt;eplica-bruxaria&gt;'
            

    });