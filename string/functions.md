# Javascript functions

## length

`length` property is used to find string length.

```js
const name = "sudo power"
console.log(name.length) // 10
```

## upper and lower case

```js
const product = "Laptop"
product.toUpperCase() // LAPTOP

const name = "Dell"
name.toLowerCase() // dell
```

## Immutable

Strings are immutable

```js
const product = "laptop"
const newProductName = product.toUpperCase()

console.log(product) // laptop
console.log(newProductName) // LAPTOP
```

## indexing
```js
const product = "laptop"

console.log(product[0]) // l
console.log(product[1]) // a
console.log(product[2]) // p
console.log(product[3]) // t
console.log(product[4]) // o
console.log(product[5]) // p
console.log(product[6]) // undefined

console.log(product.charAt(5)) // p
console.log(product.charAt(6)) // ''

console.log(product.charCodeAt(5)) // 112
console.log(product.charCodeAt(6)) // NaN (not a number)

console.log("A".charCodeAt(0)) // 65

String.fromCharCode(65) // A
```

## sub string

There are multiple functions for sub string in javascript.

### sub string functions
```js
substring(startIndex, endIndex)

slice(startIndex, endIndex)
substr(startIndex, length)
```

### normal example
```js
const product = "laptop"

product.substring(2, 5) // pto

product.slice(2, 5) // pto
product.substr(2, 3) // pto
```

### only one positive argument
```js
const product = "laptop"

product.slice(3) // 'top'

product.substring(3) //'top'
product.substr(3) //'top'
```

### only one negative argument
```js
const product = "laptop"

product.substring(-2) //'laptop', it just ignore negative index

product.slice(-2) // 'op'
product.substr(-2) //'op'
```

## replace

```js
const productDescription = "Laptop is fast. Laptop has good process. laptop is lightweigth."

productDescription.replace('Laptop', 'tablet') // tablet is fast. Laptop has good process. laptop is lightweigth.
```

```js
const productDescription = "Laptop is fast. Laptop has good process. laptop is lightweigth."

productDescription.replace(/Laptop/g, 'tablet') // tablet is fast. tablet has good process. laptop is lightweigth.'
```

```js
const productDescription = "Laptop is fast. Laptop has good process. laptop is lightweigth."

productDescription.replace(/Laptop/gi, 'tablet') // 'tablet is fast. tablet has good process. tablet is lightweigth.'
```

## concat

```js
const firstName = "sudo"
const lastName = "power"
const fullName = firstName.concat(lastName)

console.log(fullName) // sudopower
```

```js
const firstName = "sudo"
const lastName = "power"
const fullName = firstName + lastName

console.log(fullName) // sudopower
```

## split

```js
const productDescription = "Laptop is fast"
const arrayDesc = productDescription.split(" ") 

console.log(arrayDesc) // [ 'Laptop', 'is', 'fast' ]
```

## search

```js
const productDescription = "Laptop is fast"

productDescription.search('is') // 7
productDescription.indexOf('is') // 7
```

```js
const productDescription = "Laptop is fast"

productDescription.search('a') // 1, not support second parameter
productDescription.indexOf('a', 3) // 11
```

```js
const productDescription = "hello, Laptop is fast"

productDescription.search(/laptop/i) // 7, support reguler expression
productDescription.indexOf('laptop') // -1, not found
```

```js
const productDescription = "Laptop is fast"

productDescription.indexOf('a') // 1
productDescription.lastIndexOf('a') // 11
```

```js
const productDescription = "Laptop is fast"

productDescription.startsWith('Laptop') // true
productDescription.endsWith('fast') // true
```

```js
const productDescription = "Laptop is fast"

productDescription.includes('fast') // true
```
