const fs = require("fs");
const data = require('./db_dummy_data');

// console.log(data)

const addProductsToDB = (data) => {
    data.forEach((elem, idx)=>{
        fetch('http://localhost:3000/api/products',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(elem)
        }).then((res)=>{
            console.log('Success:: ', idx);
        }).catch((err)=>{
            console.log('Error:: ', idx)
        });
    });
}
// addProductsToDB(data)
    
module.exports = addProductsToDB;