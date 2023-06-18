export const Query = {
    // Product Query
    product: (parent, { id }, { db }) => {
        return db.products.find((product) => product.id === id);
    },
    products: (parent, args, { db }) => {
        const filter = ( args.filter ) ? args.filter : {};
        let filteredProducts = db.products;

        if ( typeof filter.onSale === 'boolean'  ) {
            filteredProducts = filteredProducts.filter( product => product.onSale === filter.onSale );
        }

        return filteredProducts;
    },

    // Category Query
    category: (parent, { id }, { db }) => {
        return db.categories.find((category) => category.id === id);
    },
    categories: (parent, args, { db }) => db.categories,

    // Review Query
    review: (parent, { id }, { db }) => {
        return db.reviews.find((review) => review.id === id);
    },
    reviews: (parent, args, { db }) => db.reviews,
};
