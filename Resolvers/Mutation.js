import { v4 as uuid } from  'uuid';

export const Mutation = {
    // ---------------------------------------------
    // Product Mutations
    // ---------------------------------------------
    addProduct: ( parent, { input }, { db } ) => {
        const product = {
            id: uuid(),
            ...input
        };

        db.products.push( product );
        
        return product;
    },

    updateProduct: ( parent, { input }, { db } ) => {
        const oldData = db.products.find( item => item.id === input.id );

        if ( ! oldData ) {
            return null;
        }

        const updatedData = {...oldData, ...input };

        db.products = db.products.map( item => {
            if ( item.id !== input.id ) {
                return item;
            }

            return updatedData;
        } );
        
        return updatedData;
    },

    deleteProduct: ( parent, { id }, { db } ) => {
        const oldData = db.products.find( item => item.id === id );

        if ( ! oldData ) {
            return false;
        }

        // Delete Product Reviews
        db.reviews = db.reviews.filter( item => item.productID !== id );

        // Delete The Product
        db.products = db.products.filter( item => item.id !== id );

        return true;
    },

    // ---------------------------------------------
    // Category Mutations
    // ---------------------------------------------
    addCategory: ( parent, { input }, { db } ) => {
        const category = {
            id: uuid(),
            name: input.name,
        };

        db.categories.push( category );

        return category;
    },

    updateCategory: ( parent, { input }, { db } ) => {
        const oldData = db.categories.find( item => item.id === input.id );

        if ( ! oldData ) {
            return null;
        }

        const updatedData = { ...oldData, ...input };

        db.categories = db.categories.map( item => {
            if ( item.id !== input.id ) {
                return item;
            }

            return updatedData;
        } );
        
        return updatedData;
    },

    deleteCategory: ( parent, { id }, { db } ) => {
        const oldData = db.categories.find( item => item.id === id );

        if ( ! oldData ) {
            return false;
        }

        // Delete Category ID From Products
        db.products = db.products.map( item => {

            if ( item.categoryID !== id ) {
                return item;
            }

            return { ...item, categoryID: null }

        } );

        // Delete The Category
        db.categories = db.categories.filter( item => item.id !== id );

        return true;
    },

    // ---------------------------------------------
    // Review Mutations
    // ---------------------------------------------
    addReview: ( parent, { input }, { db } ) => {
        const review = {
            id: uuid(),
            date: new Date().toJSON().slice( 0, 10 ),
            title: input.title,
            comment: input.comment,
            rating: input.rating,
            productID: input.productID,
        };

        db.reviews.push( review );

        return review;
    },

    updateReview: ( parent, { input }, { db } ) => {
        const oldData = db.reviews.find( item => item.id === input.id );

        if ( ! oldData ) {
            return null;
        }

        const updatedData = { ...oldData, ...input };

        db.reviews = db.reviews.map( item => {
            if ( item.id !== input.id ) {
                return item;
            }

            return updatedData;
        } );
        
        return updatedData;
    },

    deleteReview: ( parent, { id }, { db } ) => {
        const oldData = db.reviews.find( item => item.id === id );

        if ( ! oldData ) {
            return false;
        }

        db.reviews = db.reviews.filter( item => item.id !== id );

        return true;
    },
};