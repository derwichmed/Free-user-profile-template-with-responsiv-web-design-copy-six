$(function (){
    isNavBarHidden = true;
   $('.mobile_navs img').click(function (){
       if(isNavBarHidden){
            $('.user_profile nav').show(); 
            isNavBarHidden = false;
       }
        else{
            $('.user_profile nav').hide(); 
            isNavBarHidden = true;
       }
   });
});