const addedFood = []

class Product {
    constructor(title){
        this.title = title;
    }

    save(){
        addedFood.push(this)
    }

    fetchAll(){
        return addedFood;
    }
}

module.exports = Product;