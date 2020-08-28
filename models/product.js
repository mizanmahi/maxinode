const path = require('path');
const fs = require('fs');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

class Product {
    constructor(title){
        this.title = title;
    }

     save(){
        fs.readFile(p,  (err, fileContent) => {
            let addedFood = [];
            if(!err){
                addedFood = JSON.parse(fileContent);
            }
            addedFood.push(this);
            fs.writeFile(p, JSON.stringify(addedFood), err => {
                console.log(err);
            })
        })

    }

    static fetchAll(cb){
        fs.readFile(p, (err, fileContent) => {
           if(err){
               cb([]);
           }
            cb(JSON.parse(fileContent));
       })

    }
}

module.exports = Product;