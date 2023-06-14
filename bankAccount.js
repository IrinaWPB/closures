function createAccount (pin, amount) {
  return {
    checkBalance: function(yourPin) {
      if (yourPin === pin) {
        console.log(`Current balance: $${amount}`)
      } else {
        console.log(`Invalid PIN`)   
      }
    },
    deposit: function(yourPin, deposit) {
      if (yourPin === pin) {
        amount += deposit
        console.log(`Successfully deposited $${deposit}. Current balance: $${amount}`)
      } else {
        console.log(`Invalid PIN`) 
      }
    },
    withdraw: function(yourPin, withdraw) {
      if (yourPin === pin) {
        if (withdraw > amount) {
          console.log('Not enough money')
        } else {
          amount -= withdraw
          console.log(`Successfully withdrew $${withdraw}. Current balance: $${amount}`)  
        }
      } else {
        console.log(`Invalid PIN`) 
      }  
    },
    changePin: function(yourPin, newPin) {
      if (yourPin === pin) {
        yourPin = newPin
        console.log(`PIN successfully changed`)
      } else {
        console.log(`Invalid PIN`)
      }
    }
  }
}