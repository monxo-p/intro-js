const atm_code = "8762";
let user_code = prompt("Enter your ATM code:");
let account_balance = 150000;

let tries = 3;

while (user_code !== atm_code) {
  tries--;

  if (tries > 0) {
    alert("Incorrect Password");
    user_code = prompt("Enter the correct code:");
  } else {
    alert("You have exceeded the number of tries.");
  }
}

if (tries > 0) {
  alert("Welcome to your account");
  atm_account();
}

function atm_account() {
  const deposit = document.getElementById("deposit");
  const withdraw = document.getElementById("withdraw");
  const viewbal = document.getElementById("viewbalance");

  viewbal.addEventListener("click", (e) => {
    e.preventDefault();

    alert(`Account Balance: ${account_balance}`);
  });

  withdraw.addEventListener("click", (e) => {
    e.preventDefault();

    withdraw_amnt = parseInt(prompt("How much money do you want to withdraw?"));

    account_balance -= withdraw_amnt;
  });

  deposit.addEventListener("click", (e) => {
    e.preventDefault();

    deposit_amnt = parseInt(
      prompt("How much money would you like to deposit?")
    );

    account_balance += deposit_amnt;

    // withdraw.addEventListener('click', (e) =>{
    //     e.preventDefault()

    //     withdraw_amnt = parseInt(prompt("How much money would you like to withdraw?"))

    //     account_balance -= withdraw_amnt
  });
}
