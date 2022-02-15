# Number 

## Arithmetic operations

```
10+20 // 30

20*10 // 200

20-10 // 10

20/10 // 2

20 ** 10 // 10240000000000
```

## toString()

Return string

```
2.toString(2) // SyntaxError: Invalid

const rollNo = 123

rollNo.toString(2) // binary 1111011
rollNo.toString(8) // octal 173
rollNo.toString(10) // decimal 123
rollNo.toString(6) // hexa-decimal 7b
```

## Number object

```
let rollNo = new Number(123) // Don't use it

rollNo === 123 // false
```

## toFixed()

return string

```
const price = 2000.632

price.toFixed(0) // 2001
price.toFixed(2) // 2000.63
price.toFixed(4) // 2000.6320
price.toFixed(6) // 2000.632000
```

## String to number

```
Number("2000.632") // 2000.632
parseInt("2000.632") // 2000
parseFloat("2000.632") // 2000.632

Number("2000.632 is a product price") // NaN

parseInt("2000.632 is a product price") // 2000
parseFloat("2000.632 is a product price") // 2000.632

parseInt("product price is 2000.632") // NaN
parseFloat("product price is 2000.632") // NaN
```

## Number.isInteger()

```
Number.isInteger(10) // true

Number.isInteger(10.55) // false
```

# Math Functions

## Round number

```
// Math.round(x) : round to its nearest integer
Math.round(2000.66) // 2001
Math.round(2000.44) // 2000

// Math.ceil(x) : round up to its nearest integer
Math.ceil(2000.66) // 2001
Math.ceil(2000.44) // 2001

// Math.floor(x) : round down to its nearest integer
Math.floor(2000.66) // 2000
Math.floor(2000.44) // 2000

// Math.trunc(x) : return integer part
Math.trunc(2000.66) // 2000
Math.trunc(2000.44) // 2000
```

## Math.pow()

```
Math.pow(8, 2) // 64

8 ** 2 // 64
```

## Math.sqrt()

```
Math.sqrt(16) // 4 
```

## Math.min()

```
Math.min(100, -1, 50, 30, 20) // -1

const prices = [100, 50, 10, 60]
Math.min(...prices)
```

## Math.max()

```
Math.max(100, -1, 50, 30, 20) // -1

const prices = [100, 50, 10, 60]
Math.max(...prices)
```

## Math.random()

```
Math.random() // any random value 0.xxxxxx

Math.floor(1000 + Math.random() * 9000) // xxxx
```
