export const Review = {
  product: ( parent, args, { db } ) => {
    const { id } = parent;

    console.log( { parent } );

    return db.products.find((product) => product.id === id);
  },
};
