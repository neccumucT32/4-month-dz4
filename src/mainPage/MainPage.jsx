import {useState, useEffect} from 'react';

function MainPage({user}) {
    const [users, setUsers] = useState({name: "", lastName: ""});

useEffect(()=> {
    if (user) {
        setUsers(user)
    }
},[user]);

    return (
        <div>
            <h2>Добро пожаловать {users.name} {users.lastName}, мы тебя ждали</h2>
        </div>
    );
}

export default MainPage;