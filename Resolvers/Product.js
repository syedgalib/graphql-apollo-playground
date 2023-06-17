export const Product = {
  category: ( parent, args, { db } ) => {
    const { categoryID } = parent;
    return db.categories.find((category) => category.id === categoryID);
  },
};
