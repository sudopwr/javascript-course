# Array Iteration functions

## for loop

```js
// if you just want value
const prices = [100, 200, 150, 400]

for (let price of prices) {
    console.log(price)
}
```

```js
// if you just want a index
let prices = [100, 200, 150, 400]

for (let index in prices) {
    console.log(price)
}

// 0 1 2 3
```

```js
// if you want both index and value
let prices = [100, 200, 150, 400]

prices.forEach(
    function(price, index, arr) {
        console.log(price, index)
    }
)
```

```js
const prices = [100, 200, 150, 400]

for(let i=0; i<prices.length; i++) {
    console.log(prices[i])
}
```

## map

```js
const colors = ['red', 'blue', 'green']

const colorsDescription = colors.map(function (value, index, arr) {
  return value + ' color'
})

console.log(colorsDescription)
// [ 'red color', 'blue color', 'green color' ]
```

```js
const productPrices = [100, 200, 300]

const dicountedProducts = productPrices.map(function (value) {
  return value - 10
})

console.log(dicountedProducts)
// [ 90, 190, 290 ]
```

## filter

```js
const productPrices = [99, 2001, 3001]

const highValueProducts = productPrices.filter(function(value, index, arr) {
  return value > 100
})

console.log(highValueProducts) // [ 2001, 3001 ]
```

```js
const products = [
  { name: "toy1", price: 99 },
  { name: "toy2", price: 3000 },
  { name: "toy3", price: 55 },
  { name: "toy4", price: 4000 }
]

const highValueProducts = products.filter(function(value) {
  return value.price > 100
})

console.log(highValueProducts)
// [ { name: 'toy2', price: 3000 }, { name: 'toy4', price: 4000 } ]
```

## reduce

```js
const productPrices = [99, 2001, 3001]

const total = productPrices.reduce(function (total, value, index, arr) {
  return total + value
}, 0)

console.log(total) // 5101
```

```js
const productPrices = [99, 2001, 3001]

const total = productPrices.reduceRight(function (total, value, index, arr) {
  return total + value
}, 0)

console.log(total) // 5101
```

## every()

```js
const age = [25, 20, 65, 50]

const isAllAbove18 = age.every(function(value) {
  return value > 18
})
console.log(isAbove18) // true
```

```js
const age = [25, 20, 65, 15]

const isAllAbove18 = age.every(function(value) {
  return value > 18
})
console.log(isAbove18) // false
```

## some()

```js
const age = [5, 2, 6, 8]

const isAnyAbove18 = age.some(function(value) {
  return value > 18
})
console.log(isAnyAbove18) // false
```

```js
const age = [5, 2, 6, 20]

const isAnyAbove18 = age.some(function(value) {
  return value > 18
})
console.log(isAnyAbove18) // true
```

## indexOf()

```js
const colors = ['red', 'green', 'blue', 'green']

const greenIndex = colors.indexOf('green') 
console.log(greenIndex) // 1
```

## lastIndexOf()

```js
const colors = ['red', 'green', 'blue', 'green']

const greenIndex = colors.lastIndexOf('green') 
console.log(greenIndex) // 3
```

## findIndex()

```js
const colors = ['red', 'green', 'blue', 'green']

const greenIndex = colors.findIndex(function(value) {
  return value === 'green'
}) 
console.log(greenIndex) // 1
```

```js
products = [
  { name: "toy1", price: 123 },
  { name: "toy2", price: 4 },
  { name: "toy3", price: 324 },
  { name: "toy4", price: 23 }
]

const findProductIndex = products.findIndex(function (p) {
    return p.price >= 324
  }
)
console.log(findProductIndex) // 2
```

## find()

```js
const colors = ['red', 'green', 'blue', 'green']

const green = colors.find(function(value) {
  return value === 'green'
}) 
console.log(green) // green
```

```js
products = [
  { name: "toy1", price: 123 },
  { name: "toy2", price: 4 },
  { name: "toy3", price: 324 },
  { name: "toy4", price: 23 }
]

const findProduct = products.find(function (p) {
    return p.price >= 324
  }
)
console.log(findProduct) // { name: "toy3", price: 324 }
```
