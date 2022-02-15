# Array

## Create array

```js
let colors = ['red', 'green'] // best

colors = new Array('red', 'green') // bad

let prices = []

prices[0] = 100
prices[1] = 200
```

## Change element

```js
let colors = ['red', 'green']
colors[0] = 'blue'
```

## Looping

```
let colors = ['red', 'green']

for(let color of colors) {
  console.log(color)
}
```

## length

```
let colors = ['red', 'green']

colors.length
```

## is Array?

```
let colors = ['red', 'green']

Array.isArray(colors) // true

colors instanceof Array // true
```

## add element

```
let colors = ['red', 'green']
colors.push('blue') // best

colors[colors.length] = 'blue' // bad
```

## .toString()

```
let colors = ['red', 'green']
colors.toString() // 'red,green'
```

## remove element

```
let colors = ['red', 'green']
colors.pop()

console.log(colors) // ['red']
```

## merging

```
let available = ['laptop', 'mobile']
let saleout = ['headset', 'microphone']

let allProduct = available.concat(saleout) // [ 'laptop', 'mobile', 'headset', 'microphone' ]

allProduct = [...available, ...saleout] // [ 'laptop', 'mobile', 'headset', 'microphone' ]
```

## max and min

```
const prices = [100, 50, 10, 60]
Math.max(...prices)

const prices = [100, 50, 10, 60]
Math.min(...prices) // best

Math.max.apply(null, prices); // ok
```

## sort

```
colors = ["abc", "def", "efg", "bca"]
colors.sort() // [ 'abc', 'bca', 'def', 'efg' ]

console.log(colors) // [ 'abc', 'bca', 'def', 'efg' ]

prices = [123, 45, 324, 23]
prices.sort() // [ 123, 23, 324, 45 ]

prices = [123, 45, 324, 23]
prices.sort(function(a, b){return a - b}) // [ 23, 45, 123, 324 ]
```

