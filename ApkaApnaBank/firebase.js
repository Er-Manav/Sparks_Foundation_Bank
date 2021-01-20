let data = [];
const table = document.getElementById("table");
// const debit = document.getElementById("debit");
// const credit = document.getElementById("credit");

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        data.push({ data: doc.data(), id: doc.id });
    });
    console.log(data);
    if (table)
        insertCustomerList(data);
    if (debit)
        insertDebitList(data);

});

function insertCustomerList(d) {
    d.forEach(data => {

        table.innerHTML += `
        <tr>
            <td>${data.data.Name}</td>
            <td>${data.data.Email}</td>
            <td>${data.data.Address}</td>
            <td>${data.data.Balance}</td>
    
        </tr>
        
        `;
        if (debit)
            debit.innerHTML += `
        <option value="${data.data.Name}" id="${data.id}">${data.data.Name}</option>
        
        `;
        if (credit)
            credit.innerHTML += `
        <option value="${data.data.Name}" id="${data.id}">${data.data.Name}</option>
        
        `;
    })
}

function insertDebitList(d) {
    d.forEach(data => {


        // if(debit)
        debit.innerHTML += `
        <option value="${data.data.Name}" id="${data.id}">${data.data.Name}</option>
        
        `;
        // if(credit)
        credit.innerHTML += `
        <option value="${data.data.Name}" id="${data.id}">${data.data.Name}</option>
        
        `;
    })
}