const { Schema, model } = require("mongoose");
const Item = require('./Item');

const categorySchema = new Schema({
    categoryName: {
        type: String, 
        required: true,
        min: 1, 
        max: 40
    }, 

    categoryItems: {
        type: [Item],
        required: false
    }
});

