"use strict";

//IIFE - Immediately invoked Functional Expression
(function(){

    function DisplayHomePage(){
        console.log("Called DisplayHomePage() ... ");

        let AboutUsBtn = document.getElementById("AboutUsBtn");
        AboutUsBtn.addEventListener("click", function () {
            location.href = "about.html";
        });;



    }
    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage() ... ");
    }
    function DisplayProductsPage(){
        console.log("Called DisplayProductsPage() ... ");
    }
    function DisplayServicesPage(){
        console.log("Called DisplayServicesPage() ... ");
    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage() ... ");
    }

    function start(){
        console.log("Start App...");

        switch (document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }




    }
    window.addEventListener("load", start);

})()
