let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result"); 

searchBtn.addEventListener("click", async () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    try {
        const response = await fetch(finalURL);
        const data = await response.json();
        const country = data[0];
        console.log(country);
        console.log("Ülke Adı:", country.name.common);
        console.log("Ülke Başkenti:", country.capital[0]);
        console.log("Ülke Dili:", Object.values(country.languages)[0]);
        console.log("Ülke Bayrağı:", country.flags.svg);
       
        
        result.innerHTML = "";
        result.innerHTML += `<div class="card">
        <h5 class="card-header text-white bg-primary mb-2">${country.name.common}</h5>
        <div class="card-body">
           <img src="${country.flags.svg}" class="flag-img" alt="flag" width="20%"/>
           <ul class="list-group list-group-flush">
               <li class="list-group-item">Başkent: ${country.capital[0]}</li>
               <li class="list-group-item">Dil: ${Object.values(country.languages)[0]}</li>
           </ul>
       </div>
   </div>`;
    
    } catch (error) {
        console.error("Hata oluştu:", error);
        alert("Ülke adı alınırken bir hata oluştu. Lütfen tekrar deneyin.");
    }
});
