const mongoose = require("mongoose");
const Product = require("./models/Product.js");


const products = [
    {
        name : "Iphone 14pro",
        img : "https://images.unsplash.com/photo-1584839401450-accbe1a8ef7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGklMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        price : 13000,
        desc : "Very costly aukat se bharar"
    },
    {
        name : "Macbook M2 pro",
        img : "https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        price : 1300000,
        desc : "Bahut zyada"
    },
    {
        name : "I Watch",
        img : "https://images.unsplash.com/photo-1591147810559-9ae8cc24c862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHdhdGNofGVufDB8fDB8fHww",
        price : 120000,
        desc : "No mat kharidna"
    },
    {
        name : "I pad pro" ,
        img : "https://images.unsplash.com/photo-1648806030599-c963fd14a22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aSUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D",
        price : 145868 ,
        desc : "Sasta hai"
    },
    {
        name : "airpods",
        img : "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price :  1300000 ,
        desc : " bahut bekar hai mat le"
        }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}
module.exports = seedDB;


