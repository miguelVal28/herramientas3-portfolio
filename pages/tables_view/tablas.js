function addDataToTable(){

    const table = document.getElementById('user-table').getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = User.name;
    cell2.innerHTML = User.age;
    cell3.innerHTML = User.telephone;
    cell4.innerHTML = User.email;
}

const User ={
    name: 'user',
    age: 36,
    telephone: 12333,
    email: 'user@example.com'
}