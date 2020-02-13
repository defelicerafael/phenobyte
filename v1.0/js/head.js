var headjs = (function(){
    
    var myFunction,x,scrollFunction,logo,navmenu;
    
   /* window.onscroll = function() {
        scrollFunction();
       
    };*/
    
    x = document.getElementById("myTopnav");
    logo = document.getElementById("logo");
    navmenu = document.getElementById("navmenu");
    myFunction = function() {
      
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };    
 
    scrollFunction = function () {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        x.style.height = "15%";
        logo.style.marginTop = "-0.3em";
        navmenu.style.marginTop = "1.6em";
        
      } else {
        x.style.height = "30%";
        logo.style.marginTop = "0.7em";
        navmenu.style.marginTop = "1.2em";
       
      }
    };
    
    
    return{
        myFunction :  function(){
            myFunction();
        },
        navScroll : function(){
          scrollFunction();  
        }
    };
})();

