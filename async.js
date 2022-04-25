function getBalance() {
  const handlePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(5000)
    }, 1000)
  })

  return handlePromise
}

function withdraw(amount) {
  const handlePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('called withdraw')
      return reject('Error: withdraw operation failed')
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

async function allOperation() {
  try {
    const balance = await getBalance()
    console.log('Current Balance: ', balance)
  
    const withBalance = await withdraw(1000)
    console.log('Withdraw Balance: ', withBalance)
  
    const depoBalance = await deposit(1000)
    console.log('Deposit Balance: ', depoBalance)  
  } catch (e) {
    console.log('Error : ', e)
  }
}

allOperation()
