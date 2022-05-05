import Header from "./components/Header";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import axios from "axios";
import React from "react";

function App() {
  const [data, setData] = React.useState(0);
  const [user, setUser] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [];

  React.useEffect(()=>{
    axios.get(`https://6272b2f4c455a64564c55f15.mockapi.io/users?page=${currentPage}&limit=12`).then(res => {
      setUser(res.data);
    });
    axios.get("https://6272b2f4c455a64564c55f15.mockapi.io/users").then(res => {
      setData(Object.keys(res.data).length);
    })
  },[currentPage])
  
    for(let i=1;i< (Math.ceil(data/12)); i++){
    pages.push(i);
    }
  
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
            avatar = {user.avatar}
            />
          ))
        }
      </div>
      <div className="pages">
          {pages.map((page,index)=> 
          <span 
          className={currentPage === page ? "current-page" : "page"} 
          onClick={()=> setCurrentPage(index+1)}
          key={index}>{page}</span> )}
      </div>

    </div>
  );
}

export default App;
