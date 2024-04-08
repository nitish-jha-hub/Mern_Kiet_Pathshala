console.log('Hello from weather/script.js');

function fetchapi(){
    // apikey=JZ8C422VSQCWJMYJVCPPCD77J
    const api ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=JZ8C422VSQCWJMYJVCPPCD77J"
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {  
        renderUI(data);    
        renderTable(data);  
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function renderTable(data){
    const table = document.querySelector('.table');
    table.innerHTML = `
    <tr>
        <th>Day</th>
        <th>Conditions</th>
        <th>Temperature</th>
        <th>Wind Speed</th>
        <th>Humidity</th>
        <th>UV Index</th>
        <th>Visibility</th>
    </tr>
    `;
    data.days.forEach(day => {
        table.innerHTML += `
        <tr>
            <td>${day.datetime}</td>
            <td>${day.conditions}</td>
            <td>${day.tempmax}F</td>
            <td>${day.windspeed}mph</td>
            <td>${day.humidity}%</td>
            <td>${day.uvindex}</td>
            <td>${day.visibility}miles</td>
        </tr>
        `;
    });
}


// 
// function renerUi(data)=>{
    
//     appenchild
// }

// ui render in div
function renderUI(data){
    const weather = document.querySelector('.weather');
    weather.innerHTML = `
    <h1>Weather in London</h1>
    <h2>${data.days[0].conditions}</h2>
    <h3>Temperature: ${data.days[0].tempmax}F</h3>
    <h3>Wind Speed: ${data.days[0].windspeed}mph</h3>
    <h3>Humidity: ${data.days[0].humidity}%</h3>
    <h3>UV Index: ${data.days[0].uvindex}</h3>
    <h3>Visibility: ${data.days[0].visibility}miles</h3>
    `;
}
fetchapi(); 