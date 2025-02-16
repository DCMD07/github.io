"use strict";

//IIFE - Immediately invoked Functional Expression
(function(){

    function DisplayHomePage() {
        console.log("Called DisplayHomePage() ... ");

        let AboutUsBtn = document.getElementById("AboutUsBtn");
        AboutUsBtn.addEventListener("click", function () {
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];
        //
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my first paragraph";

        // Attach to the dom
        MainContent.appendChild(MainParagraph);

        // String concatenation
        let FirstString = "This is";
        let SecondString = `${FirstString} is my second paragraph`;
        MainParagraph.textContent = SecondString;

        //Attach to the dom
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;
        // <article></p></article>
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);


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
