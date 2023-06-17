export const Category = {
  products: ( parent, args, { db } ) => {
    const { id } = parent;
    return db.products.filter((product) => product.categoryID === id);
  },
};
