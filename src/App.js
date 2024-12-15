import './App.css';
import {useState, useEffect} from "react";
import MainPage from "./mainPage/MainPage";

function App() {
    const [users, setUsers] = useState("")

    useEffect(()=> {
        const name = prompt("Введите ваше имя");
        const lastName = prompt("Введите ваше фамилию");

        if(name === "John" && lastName === "Johns") {
            setUsers({name, lastName})
        } else {
            alert("Доступ запрещен")
        }
    }, []);

    return (
    <div className="App">
        {users ? <MainPage user={users} /> : <p>Авторизация...</p>}
    </div>
  );
}

export default App;
