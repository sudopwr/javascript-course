# Array

## Create array

```js
let colors = ['red', 'green'] // best

colors = new Array('red', 'green') // bad

let prices = []

prices[0] = 100
prices[1] = 200
```

## .toString()

```js
let colors = ['red', 'green']
colors.toString() // 'red,green'
```

## Change element

```js
let colors = ['red', 'green']
colors[0] = 'blue'
```

## Looping

```js
let colors = ['red', 'green']

for(let color of colors) {
  console.log(color)
}
```

## length

```js
let colors = ['red', 'green']

colors.length
```

## is Array?

```js
let colors = ['red', 'green']

Array.isArray(colors) // true

colors instanceof Array // true
```

## add element

```js
let colors = ['red', 'green']
colors.push('blue') // best

colors[colors.length] = 'blue' // bad
```

## remove element

```js
let colors = ['red', 'green']
colors.pop()

console.log(colors) // ['red']
```

## merging

```js
let available = ['laptop', 'mobile']
let saleout = ['headset', 'microphone']

let allProduct = available.concat(saleout) // [ 'laptop', 'mobile', 'headset', 'microphone' ]

allProduct = [...available, ...saleout] // [ 'laptop', 'mobile', 'headset', 'microphone' ]
```

## max and min

```js
const prices = [100, 50, 10, 60]
Math.max(...prices)

const prices = [100, 50, 10, 60]
Math.min(...prices) // best

Math.max.apply(null, prices); // ok
```

## sort

```js
colors = ["abc", "def", "efg", "bca"]
colors.sort() // [ 'abc', 'bca', 'def', 'efg' ]

console.log(colors) // [ 'abc', 'bca', 'def', 'efg' ]
```

```js
prices = [123, 45, 324, 23]
prices.sort() // [ 123, 23, 324, 45 ]

prices = [123, 45, 324, 23]
prices.sort(function(a, b){return a - b}) // [ 23, 45, 123, 324 ]
```

```js
products = [
  { name: "toy1", price: 123 },
  { name: "toy2", price: 4 },
  { name: "toy3", price: 324 },
  { name: "toy4", price: 23 }
]

products.sort(function(a, b){return a.price - b.price})
```

## join

```js
let colors = ["red", "green", "blue"]
let text = colors.join("+")

console.log(text) // red+green+blue
```
