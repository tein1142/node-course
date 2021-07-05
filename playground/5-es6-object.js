// Object property shorthand

const myName = 'Pantavit'
const userAge = '20'

const user = {
    myName, // shorthand syntax
    userAge: userAge,
    location: 'Bangkok'

}
console.log(user)

// Object destructuring

const product = {
    label: ['Red notebook', 'Blue Notebook'],
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock
// v  v  v  v  v  v  v  v  v  v
// const {
//     label: productLabel,
//     stock,
//     price 
// } = product // สามารถเปลี่ยนชื่อตัวแปลจาก Object ได้
// console.log(productLabel)
// console.log(stock)
// console.log(price)

const transaction = (type, {label:productLabel,price:productPrice}) => {
    console.log(type, productLabel[0], productPrice)
}

transaction('order',product)