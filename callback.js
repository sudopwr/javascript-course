function getBalance(processBalance) {
  setTimeout(function () {
    console.log('called getBalance 5000')
    processBalance(5000)
  }, 1000)
}

function withdraw(amount, processBalance) {
  setTimeout(function () {
    console.log('called withdraw')
    processBalance(5000 - amount)
  }, 1000)
}

function deposite(amount, processBalance) {
  setTimeout(function () {
    console.log('called deposite')
    processBalance(5000 + amount)
  }, 1000)
}

getBalance(function (currBal) {
  withdraw(1000, function (withBal) {
    deposite(2000, function (depoBal) {
      console.log(depoBal)
    })
  })
})
