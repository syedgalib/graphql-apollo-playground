export const products = [
    {
        id: 'a41fc6ab-e3f8-4b9a-a11e-766103c38576',
        name: 'Pen',
        description: 'You can use this pen to write anything you want.',
        image: null,
        quantity: 10,
        price: 10,
        onSale: false,
        categoryID: 'a41fc6ab-e3f8-4b9a-a11e-766103c38576',
    },
    {
        id: 'a41fc6ab-e3f8-4b9a-a11e-766103c38577',
        name: 'Sharpener',
        description: 'You can use this sharpener to sharpe any pencil.',
        image: null,
        quantity: 10,
        price: 2,
        onSale: true,
        categoryID: 'a41fc6ab-e3f8-4b9a-a11e-766103c38576',
    },
];

export const categories = [
    {
        id: 'a41fc6ab-e3f8-4b9a-a11e-766103c38576',
        name: 'Accessory',
    }
];

export const reviews = [
    {
        id: 'a41fc6ab-e3f8-4b9a-a11e-766103c38576',
        date: '2023-01-01',
        title: 'Nice',
        comment: 'This is a nice pen',
        rating: 5,
        productID: 'a41fc6ab-e3f8-4b9a-a11e-766103c38576',
    }
];

export const db = {
    products,
    categories,
    reviews,
}