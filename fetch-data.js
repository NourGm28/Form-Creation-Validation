async function fetchUserData(){
    const apiUrl ='https://jsonplaceholder.typicode.com/users';
    const dataContainer =document.getElementById("api-data");
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        users.forEach(users =>{ 
            const list = document.createElement('li');
            list.textContent = users.name;
            userList.append(list);
            dataContainer.append(userList);
        });
    }catch(err)
    {
        dataContainer.innerHTML = 'Failed to load user data';
        console.error(err);
    }
    
}
document.addEventListener('DOMContentLoaded',fetchUserData);