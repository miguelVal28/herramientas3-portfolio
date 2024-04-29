async function retrieveUserData(){

    let users;

    try{
        const response = await fetch('https://dummyjson.com/users?limit=20&select=firstName,lastName,age,phone,email');

        responseData = await response.json();

        users = responseData.users;
    }
    catch(error){
        console.log(`Failed to retrieve user data: ${error}`);
    }

    for(let user of users){
        assignUserDataToTable(user);
    }
}

function assignUserDataToTable(user){
    const  {firstName, lastName, age, email, phone} = user;
    const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];

    const fullName = `${firstName} ${lastName}`

    const row = tableBody.insertRow();
    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    const phoneCell = row.insertCell(2);
    const emailCell = row.insertCell(3);

    nameCell.textContent = fullName;
    ageCell.textContent = age;
    phoneCell.textContent = phone;
    emailCell.textContent = email;
}

retrieveUserData();