const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Item {
        _id: ID!
        itemName: String!
        itemCategory: String!
    }
    type Category {
        _id: ID!
        categoryName: String!
        categoryItems: [Item]
    }

    type Query {
        getAllItems: [Item]
        getOneItem(id: ID!): Item
    }

    type Mutation {
        addItem(itemName: String!, itemCategory: String!): Item! 
   
    }
`;

module.exports = typeDefs;