# Date in javascript

## create date object

```js

Date() // bad

new Date() // good, returns default UTC time

new Date(2000, 6, 25, 10, 50) 
// 2000-07-25T05:20:00.000Z - It is UTC 00:00 time
// new Date(year, month, day, hour, minute)

new Date(2000, 6, 25, 10, 50).toString()
// 'Tue Jul 25 2000 10:50:00 GMT+0530 (India Standard Time)'
```

## get 

```js
const currentDate = new Date()

currentDate.toString()
// Example: 'Tue Mar 01 2022 18:29:58 GMT+0530 (India Standard Time)'

currentDate.getFullYear() // 2022

currentDate.getMonth() // 2

currentDate.getDate() // 1

currentDate.getHours() // 18

currentDate.getMinutes() // 29

currentDate.getSeconds() // 58

currentDate.getMilliseconds() // 
```

## set 

```js
const currentDate = new Date()

currentDate.toString()
// Example: 'Tue Mar 01 2022 18:29:58 GMT+0530 (India Standard Time)'

currentDate.setFullYear(2030) // Example: 2030-03-01T12:59:58.167Z

currentDate.setMonth()

currentDate.setDate()

currentDate.setHours()

currentDate.setMinutes()

currentDate.setSeconds()

currentDate.setMilliseconds()
```

## format

```js
new Date("10-10-2010")
```

## total miliseconds

Total miliseconds from `1 January 1970 00:00:00 UTC`.

```js
Date.now() // total seconds from when time started 

const currentDate = new Date()
currentDate.getTime()
```
