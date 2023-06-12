const { ApolloError } = require("apollo-server-express");
const Item = require('../models/Item');
const Category = require('../models/Category');

const resolvers = {
    Query: {
        async getAllItems() {
            return await Item.find()
        }, 
        async getOneItem(_, args) {
            console.log(args)
            const item = await Item.findById(args.id);
            return item;
        }
    },

    Mutation: {
        async addItem(_, {itemName, itemCategory}) {
            return await Item.create({
                itemName,
                itemCategory
            });
        },

        async addCategory(_, {categoryName}) {
            return await Category.create({
                categoryName
            });
        }

        // async deleteItem(_, args) {
        //     const { id } = args;
        //     return await Item.deleteOne({_id: id});
        // }
    }
}

module.exports = resolvers;