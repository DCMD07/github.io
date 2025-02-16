"use strict";

//IIFE - Immediately invoked Functional Expression
(function(){

    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if (contact.serialize()){
            let key = `contact_${Date.now()}`;
            localStorage.setItem(key, contact.serialize());
        }
    }
    function DisplayEditPage(){
        console.log("DisplayEditPage Called...");

        const page = location.hash.substring(1);

        switch(page){
            case "add":
            {
                // Add new contact
                const heading = document.querySelector("main > h1");
                const editButton = document.getElementById("editButton");
                const cancelButton = document.getElementById("cancelButton");
                // Update the browsers tab title
                document.title = "Add Contact";

                if(heading){
                    heading.textContent = "Add Contact";
                }
                if(editButton){
                    editButton.innerHTML = `<i class="fa-solid fa-user-plus"></i> Add Contact</button>`;
                    editButton.addEventListener("click", (event)=>{
                        //Prevent default behaviour form submission
                        event.preventDefault();

                        AddContact(
                            document.getElementById("fullName").value,
                            document.getElementById("contactNumber").value,
                            document.getElementById("emailAddress").value,
                        );
                        location.href="contact-list.html";

                    });
                }
                if(cancelButton){
                    cancelButton.addEventListener("click", (event)=>{
                        location.href="contact-list.html";
                    })
                }
                break;
            }
            default:
            {
                // Edit a existing contact
                const contact = new core.Contact();
                const contactData = localStorage.getItem(page);
                // Reconstructed the contact form local storage
                if(contactData){
                    contact.deserialize(contactData);
                }
                // prepopulate form fields with existing contact details
                document.getElementById("fullName").value = contact.fullName;
                document.getElementById("contactNumber").value = contact.contactNumber;
                document.getElementById("emailAddress").value = contact.emailAddress;

                const editButton = document.getElementById("editButton");
                const cancelButton = document.getElementById("cancelButton");

                if(editButton){
                    editButton.addEventListener("click", (event)=>{
                        // Prevent default form submission
                        event.preventDefault();

                        contact.fullName = document.getElementById("fullName").value;
                        contact.contactNumber =document.getElementById("contactNumber").value;
                        contact.emailAddress = document.getElementById("emailAddress").value;

                        localStorage.setItem(page, contact.serialize());
                        location.href="contact-list.html";
                    })
                }
                if(cancelButton){
                    cancelButton.addEventListener("click", (event)=>{
                        location.href="contact-list.html";
                    })
                }




                break;
            }
        }

    }

    async function DisplayWeather(){
        const apiKey ="9c39df935818422cbd3c634931559964";
        const city = "Bowmanville";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            console.log("weather API response", data);

            const weatherDataElement = document.getElementById("weather-data");

            weatherDataElement.innerHTML = `<strong>City: </strong> ${data.name}<br>
                                            <strong>Temperature: </strong> ${data.main.temp}<br>
                                            <strong>Weather: </strong> ${data.weather[0].description}<br>`;

        }catch(error){
            console.log("Error fetching weather data", error);
            document.getElementById("weather-data").textContent = "unable to fetch weather data at this time";
        }
    }
    function DisplayHomePage() {
        console.log("Called DisplayHomePage() ... ");

        let AboutUsBtn = document.getElementById("AboutUsBtn");
        AboutUsBtn.addEventListener("click", ()=> {
            location.href = "about.html";
        });

        DisplayWeather();

        document.querySelector("main").insertAdjacentHTML(
            "beforeend",
            `<p id ="MainParagraph" class="mt-3">This is my first paragraph</p>`
        );

        document.body.insertAdjacentHTML(
            "beforeend",
            `<article class="container"> <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article>`
        );



    }
    function DisplayContactListPage(){
        console.log("Called DisplayContactListPage() ... ");

        if (localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";
            let keys = Object.keys(localStorage);
            // Debugging
            console.log(keys);

            let index = 1;
            for(const key of keys){
                if(key.startsWith("contact_")){
                    let contactData = localStorage.getItem(key);
                    try{
                        // Debugging
                        console.log(contactData);
                        let contact = new core.Contact();
                        contact.deserialize(contactData);
                        data += `<tr>
                                    <th scope="row" class="text-center">${index}</th>
                                    <td>${contact.fullName}</td>
                                    <td>${contact.contactNumber}</td>
                                    <td>${contact.emailAddress}</td>
                                    <td class="text-center">
                                    <button value="${key}" class="btn btn-warning btn-sm edit">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit</button>
                                    </td>                                   
                                    <td class="text-center">
                                    <button value="${key}" class="btn btn-danger btn-sm delete">
                                    <i class="fa-solid fa-trash"></i> Delete</button>
                                    </td>
                                </tr>`;
                        index++;
                    }catch (error){
                        console.error("Error de-serializing contact data", error);
                    }
                }else{
                    console.warn(`Skipping on-contact key: ${key}`);
                }
            }
            contactList.innerHTML = data;
        }
        const addButton = document.getElementById("addButton");
        addButton.addEventListener("click", ()=>{
            location.href = "edit.html#add";
        });

        const deleteButtons = document.querySelectorAll("button.delete");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function(){
                if(confirm("delete contact, please confirm.")){
                    localStorage.removeItem(this.value);
                    location.href = "contact-list.html";
                }
            });
        });

        const editButtons = document.querySelectorAll("button.edit");
        editButtons.forEach(button => {
            button.addEventListener("click", function(){
                location.href = "edit.html#" + this.value;
            });
        });
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

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckBox");

        sendButton.addEventListener("click", function(){

           if(subscribeCheckbox.checked){

               let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
               if (contact.serialize()){
                   let key = `contact_${Date.now()}`;
                   localStorage.setItem(key, contact.serialize());
               }

           }
        });
    }

    function start(){
        console.log("Start App...");
        console.log(`Current document title is ${document.title}`);

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
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Edit Contact":
                DisplayEditPage();
                break;
            default:
                console.error("No matching case for page title");
        }




    }
    window.addEventListener("DOMContentLoaded", () =>{
        console.log("DOM is fully loaded and parsed");
        start();
        });

})()
