import Header from "./components/Header";
import Card from "./components/Card";
import axios from "axios";
import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  React.useEffect(()=>{
    axios.get("https://6272b2f4c455a64564c55f15.mockapi.io/users").then(res => {
      setUser(res.data);
    })
  })
  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        {
          user.map((user)=>(
            
            <Card 
            key = {user.id}
            firstName ={user.firstName}
            lastName = {user.lastName}
            post = {user.post}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
