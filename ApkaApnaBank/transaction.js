const trans = document.getElementById("hist");
const data = [];


db.collection("Transaction History").orderBy("Time", "desc").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data());
    });
    console.log(data);
    // if(trans)
    insertTransList(data);


});


function insertTransList(d) {
    d.forEach(data => {

        trans.innerHTML += `
            <tr>
            <td>${data.Time.toDate().toString().slice(0,24)}</td>
            <td>${data.Debit_From}</td>
            <td>${data.Credit_To}</td>
            <td>${data.Amount}</td>
            <td>${data.Remarks}</td>
        
            </tr>
            
            `;

    })
}