export const Product = {
  category: ( parent, args, { db } ) => {
    const { categoryID } = parent;
    return db.categories.find((category) => category.id === categoryID);
  },
  reviews: ( parent, args, { db } ) => {
    const { id } = parent;
    return db.reviews.filter((review) => review.productID === id);
  },
};
