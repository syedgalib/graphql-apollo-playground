export const Query = {
    // Product Query
    product: (parent, { id }, { db }) => {
        return db.products.find((product) => product.id === id);
    },
    products: (parent, args, { db }) => {
        const filter           = ( args.filter ) ? args.filter : {};
        let   filteredProducts = db.products;

        if ( typeof filter.onSale === 'boolean'  ) {
            filteredProducts = filteredProducts.filter( product => product.onSale === filter.onSale );
        }

        if ( typeof filter.avgRating === 'number' ) {
            filteredProducts = filteredProducts.filter( product => {
                const productReviews = db.reviews.filter( review => review.productID === product.id );
                
                if ( ! productReviews.length ) {
                    return 0 >= filter.avgRating;
                }
                
                const totalReviewCount = productReviews.reduce( ( carry, item ) => {
                    const rating = ( typeof item.rating === 'number' ) ? item.rating : 0;
                    const count = carry + rating;
                    return count;
                }, 0 );

                const avgRating = totalReviewCount / productReviews.length;
                return avgRating >= filter.avgRating;
            } );
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
