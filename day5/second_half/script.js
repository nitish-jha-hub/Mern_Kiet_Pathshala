console.log("APP started");

// const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
// function callAPI() {
//   fetch(url)
//   .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         for(let i = 0; i < data.articles.length; i++) {
//             document.getElementById("news").innerHTML += data.articles[i].title + "<br><br>";
//         }
//         document.getElementById("joke").innerHTML = data.articles[0].description;
//     })
// }

// function renderUI() {
//   const root = document.getElementById("root");
//   const div = document.createElement("div");
//     div.innerText = 'card';
//     root.appendChild(div);

// }
// renderUI();


const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
function callAPI() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderUI(data);
        })
}

function renderUI(data) {
    const root = document.getElementById("root");

    // got the article from data
    articles = data.articles;
    // const ar = articles[6];
    // const urlToImage1 = ar.urlToImage
    // console.log(ar);
    for (let i = 0; i < articles.length; i++) {
        const ar = articles[i];
        // create a parent div
        const div = document.createElement("div");
        div.setAttribute("class", "card")
        root.appendChild(div);

        const h3 = document.createElement("h3");
        h3.innerText = ar.title;

        const img = document.createElement("img");
        img.src = ar.urlToImage;
        img.width = 200;
        img.height = 200;
        div.appendChild(img);

        // div.innerText = ar.title;
        div.appendChild(h3);

    }



    // const div = document.createElement("div");
    // // div.innerText = 'card';
    // for (let i = 0; i < data.articles.length; i++) {
    //     document.getElementById("news").innerHTML += data.articles[i].title + "<br><br>";
    // }
    // document.getElementById("joke").innerHTML = data.articles[0].description;
    // root.appendChild(div);

}
