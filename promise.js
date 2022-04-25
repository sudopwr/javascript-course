function getBalance() {
  const handlePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('called getBalance 5000')
      return resolve(5000)
    }, 1000)
  })

  return handlePromise
}

function withdraw(amount) {
  const handlePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('called withdraw')
      return resolve(5000 - amount)
    }, 1000)
  })

  return handlePromise  
}

function deposit(amount) {
  const handlePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('called deposit')
      return resolve(5000 + amount)
    }, 1000)
  })

  return handlePromise  
}


getBalance()
  .then(function (amount) {
    console.log("\x1b[36m", 'getBalance: ', amount)
    return withdraw(1000)
  })
  .then(function (withAmount) {
    console.log("\x1b[36m", 'WithAmount: ', withAmount)
    return deposit(2000)
  })
  .then(function (depoAmount) {
    console.log("\x1b[33m", 'depoAmount: ', depoAmount)
  })
  .catch(function (error) {
    console.error("\x1b[31m", error)
  })
