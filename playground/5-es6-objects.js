
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined,
};

// When destructuring, we can give something a different name by saying oldName:newName
// Set default value with name = defaultValue. Otherwise, missing values will be *undefined* (won't crash).
const {label:productLabel, stock, rating = 5} = product;
console.log(productLabel);  // 'Red notebook'
console.log(stock);
console.log(rating);    // 5

// Can also use destructuring in function arguments.
// Destructuring undefined (i.e., not provided arg) will crash. Prevent with default arg of {}.
// Can also provide default arg for destructured items.
const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);
transaction('order');