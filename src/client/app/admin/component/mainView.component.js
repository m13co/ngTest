(function(){
    angular
        .module('app.admin')
        .controller('MainViewController', MainViewController)
        .component('mainView', {
            templateUrl:'app/admin/component/mainView.html',
            controller: 'MainViewController',
            controllerAs: 'vm',
         });

         function MainViewController(){
             var vm = this;
             vm.title = 'Wetterbericht';
             console.log(vm.title);
           
         }
})();