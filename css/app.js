

$(document).ready(function(){
    $('.cluster-container').on('click','.cluster-heading',function() {
        $(this).parent().next('.node-group').slideToggle('slow');
        
     });
    
    $('.tab-links a').on('click', function(e) {
    
        /* on clicked link, use attr() to get value of the href(ie."#tab1") value and store it as currentAttrValue*/
        var currentAttrValue = $(this).attr('href');
        console.log('clicked');
        
        /*Show/hide tabs*/        
        /*  1.currentAttrAvalue - in this case either #tab1,#tab2, #tab3 etc.  
        2. "show()" function to show that element. 
        3. "siblings()" to select all siblings of that element ,and "hide()" function to hide all siblings.*/
        $(currentAttrValue).show().siblings().hide();
        
            if(currentAttrValue === '#tab4') {
            console.log('yes!');
                $('.main-heading-wrap').animate({'width':'70%'},'fast');
                $('.tab-thin-bar').css({'width':'60%'});
                $('.traffic-summary').show().animate({'width':'310px'},'fast');
            } else {
                $('.main-heading-wrap').animate({'width':'87%'},'fast');
                $('.tab-thin-bar').css({'min-width':'87%'});
                $('.traffic-summary').animate({'width':'0'},'fast');
            } 
        
        /*Change/remove current tab to active*/
        /*On clicked, item, find parent 'li' item, add class "active" on that item */
        /*select all siblings of that item, and remove class "active" on all siblings*/
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    
        // Cancel the default action of clicked link ie-jumping top of page
        e.preventDefault();
    });

    var app = angular.module('StarterApp', ['ngMaterial']);
    
   app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
        };
 
   }]);
 

});