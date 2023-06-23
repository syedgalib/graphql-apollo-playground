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
        product: Product
    }

    type Query {
        product( id: ID! ): Product
        products( filter: ProductFilterInput ): [ Product! ]!
        category( id: ID! ): Category
        categories: [ Category! ]!
        review( id: ID! ): Review
        reviews: [ Review! ]!
    }

    type Mutation {
        addProduct( input: AddProductInput! ): Product
        updateProduct( input: UpdateProductInput! ): Product
        deleteProduct( id: ID! ): Boolean
        
        addCategory( input: AddCategoryInput! ): Category
        updateCategory( input: UpdateCategoryInput! ): Category
        deleteCategory( id: ID! ): Boolean
        
        addReview( input: AddReviewInput! ): Review
        updateReview( input: UpdateReviewInput! ): Review
        deleteReview( id: ID! ): Boolean
    }

    input AddProductInput {
        name: String!
        description: String!
        image: String
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryID: String
    }

    input UpdateProductInput {
        id: ID!
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
        onSale: Boolean
        categoryID: String
    }

    input AddCategoryInput {
        name: String!
    }

    input UpdateCategoryInput {
        id: ID!
        name: String!
    }

    input AddReviewInput {
        title: String!
        comment: String!
        rating: Int!
        productID: ID!
    }

    input UpdateReviewInput {
        id: ID!
        title: String
        comment: String
        rating: Int
        productID: ID
    }

    input ProductFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`;
