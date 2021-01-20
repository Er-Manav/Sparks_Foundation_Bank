var toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
    isLight = !isLight;
    let root = document.body;

    isLight ? toggle.innerText = "🌞" : toggle.innerText = "⚫";
    root.classList.toggle("lightMode");
}


const debit = document.getElementById("debit");
const credit = document.getElementById("credit");
const amount = document.getElementById("amount");
const message = document.getElementById("message");
const transfer = document.getElementById("transfer");


let debitId;
let creditId;


debit.addEventListener('change', (e) => {
    // e.target.selectedIndex
    debitId = e.target.options[e.target.selectedIndex].id
        // console.log();
})

credit.addEventListener('change', (e) => {
    // e.target.selectedIndex
    creditId = e.target.options[e.target.selectedIndex].id
        // console.log();
})


transfer.addEventListener('click', (e) => {
    e.preventDefault();
    swal("", "Transaction Successfull!", "success");

    const debitVal = debit.value;
    const creditVal = credit.value;

    const amountVal = amount.value;
    const messageVal = message.value;



    db.collection("users").doc(debitId).update({

        Balance: firebase.firestore.FieldValue.increment(-amountVal)
    })
    db.collection("users").doc(creditId).update({
        Balance: firebase.firestore.FieldValue.increment(amountVal)
    })

    db.collection("Transaction History").add({
        Amount: amountVal,
        Debit_From: debitVal,
        Credit_To: creditVal,
        Remarks: messageVal,
        Time: firebase.firestore.FieldValue.serverTimestamp(),

    }).then(() => {
        window.location.replace("customer.html")
    })




    console.log("Hello", debitVal, messageVal, amountVal, creditVal, debitId);
})



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}