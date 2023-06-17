export const Query = {
  product: ( parent, { id }, { db } ) => {
    return db.products.find((product) => product.id === id);
  },
  products: ( parent, args, { db } ) => db.products,
  category: ( parent, { id }, { db } ) => {
    return db.categories.find((category) => category.id === id);
  },
  categories: ( parent, args, { db } ) => db.categories,
};
