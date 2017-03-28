(function(){
    angular
        .module('app.admin')
        .factory('TitleService', TitleService)

        function TitleService(){
            var vm =this;
            vm.change = change;       
            vm.title = 'title';
            function change(title){
            
            return vm.title;
            }
        }
})();