(function(){
  'use strict';

  angular
    .module('app.admin')
    .controller('LoginController', LoginController )
    .component('logIn', {
        templateUrl: 'app/admin/component/login.html',
        controller: 'LoginController',
        controllerAs : 'vm',
        bindings:{
          password: '<',
          username: '<'
        }
      });

         /** @ngInject*/
    function LoginController () {
       var vm = this;
       vm.submit=submit;
       vm.accessGranted=accessGranted;
       vm.hide = false;
             accessGranted();//fortest
      
      function submit(username, password){
          vm.password = password;
          vm.username = username;
         if(vm.password == "admin" && vm.username =="admin"){
           accessGranted();
        }else{
          console.log("Passowrt oder Nutzername falsch!");
        }
       };
       function accessGranted(){
          vm.hide = true;
       }

        
      }
  


  })();

