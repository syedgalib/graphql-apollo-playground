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
        reviews: [ Review! ]
    }

    type Category {
        id: ID!
        name: String!,
        products: [ Product! ]
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productID: ID!
        product: Product!
    }

    type Query {
        product( id: ID! ): Product
        products( filter: ProductFilterInput ): [ Product! ]!
        category( id: ID! ): Category
        categories: [ Category! ]!
        review( id: ID! ): Review
        reviews: [ Review! ]!
    }

    input ProductFilterInput {
        onSale: Boolean
    }
`;
