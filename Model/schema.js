export const typeDefs = `#graphql
    type Product {
        id: ID!
        name: String!
        description: String!
        image: String
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryID: String
        category: Category
    }

    type Category {
        id: ID!
        name: String!,
        products: [ Product! ]
    }

    type Query {
        product( id: ID! ): Product,
        products: [ Product! ]!,
        category( id: ID! ): Category,
        categories: [ Category! ]!,
    } 
`;