// import required items/packages
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('data.json');
const dataObject = JSON.parse(data).products;
const url = require('node:url');

const inputElement =`
<form action="/search" method="GET">
  <input type="text" name="search" placeholder="Search Product">
  <button type="submit">Search</button>`

// create a card template or html to SSR
const cardTemplate = `
<div class="card" style='background: red; margin:20px; text-align:center;'>
  <h1>Card Title</h1>
  <p>Card Description</p>
  <img style='height:500px; width:500px;' src='image_path' alt="IMG ALT" style="width:500px">
  <a href="$href">Read More</a>
</div>`


// create a server and send response
http.createServer((req, res) => {
  const {pathname,query} = url.parse(req.url, true);
  res.write('<html><head><title>SSR</title></head><body>');
  
  console.log(pathname, query);
  if(pathname === '/about'){
    res.write('<h1>About Us</h1>');
  } 
  else if(pathname === '/contact'){
    res.write('<h1>Contact Us</h1>');
  }
  else if(pathname === '/'){
        // dataObject.forEach(item => {
        //       // console.log(item.title, item.description);
        //       res.write(cardTemplate.replace('Card Title', item.title))
        //       res.write(cardTemplate.replace('Card Description', item.description))
        //       res.write(cardTemplate.replace('image_path', item.images[0]))
        //       res.write(cardTemplate.replace('$href', `/product?id=${item.id}`))
        //       // res.write(b+pic+ids);        
        //     });
            for(let i = 0; i < 11; i++){
              res.write(cardTemplate.replace('Card Title', dataObject[i].title))
              res.write(cardTemplate.replace('Card Description', dataObject[i].description))
              res.write(cardTemplate.replace('image_path', dataObject[i].images[0]))
              res.write(cardTemplate.replace($href, `/product?id=${dataObject[i].id}`))
            }
        // res.write('<h1>home11</h1>');
      }
      else if(pathname === '/product'){
        let id = query.id;
        let product = dataObject.find(item => item.id == id);
        res.write(`<h1 stye='background-color: rgb(255, 0, 0);'>product page ${query.id}</h1>`);
        res.write(`<h1 >title: ${product.title}</h1>`);
        res.write(`<img style='border: 10px solid red; height: 300px; width: 500px;' src=${product.images[0]}></img>`);
        res.write(`<h4>description: ${product.description}</h4>`);
        res.write(`<h1 style='color:red'>price: ${product.price}</h1>`);
        res.write(`<h1>Brand: ${product.brand}</h1>`);
        res.write(`<a href="/">Home</a>`);
      }
      else if(pathname === '/home'){
        res.write('<h1>home</h1>');
      }
      else if(pathname === '/search'){
        res.write('<h1>Search product</h1>');
        res.write('<input type="text">');
        res.write('<button typr="submit">search</button>');
      }
      else{
        res.write('<h1>404 not found</h1>');
      
      }
    res.write('</body></html>');
    res.end();
  }).listen(3000, () => {
    console.log('Server is running on port 3000');
}
);