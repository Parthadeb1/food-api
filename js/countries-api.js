
const loadCountries = () => {
fetch('https://restcountries.eu/rest/v2/all')
.then (res => res.json())
.then (data => displayCountry(data))
}
loadCountries();

const displayCountry = countries =>{
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country=>{
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h4>${country.name}</h4>
        <p>${country.capital}</p>
        <button onclick="showCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const showCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then (res => res.json())
    .then (data => displayCountryDetails(data[0]));
    
}

const displayCountryDetails = country => {
    console.log(country);
   const countryDiv = document.getElementById('country_details');
   countryDiv.innerHTML =`
   <h3>${country.name}</h3>
   <p>${country.population}</p>
   <img width ="150px" src="${country.flag}">
   `;
  
}