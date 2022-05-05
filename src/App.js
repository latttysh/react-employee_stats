import Header from "./components/Header";
import Card from "./components/Card";
import axios from "axios";
import React from "react";

function App() {
  const [data, setData] = React.useState(0);
  const [user, setUser] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
    const [searchValue,setSearchValue] = React.useState('');
  const pages = [];



  React.useEffect(()=>{
    axios.get(`https://6272b2f4c455a64564c55f15.mockapi.io/users?page=${currentPage}&limit=12`).then(res => {
      setUser(res.data);
    });
    axios.get("https://6272b2f4c455a64564c55f15.mockapi.io/users").then(res => {
      setData(res.data);
    })
  },[currentPage])
  
    for(let i=1;i< (Math.ceil(Object.keys(data).length/12)); i++){
    pages.push(i);
    }
  

    const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value); 
  }
  return (
    <div className="wrapper">
      <Header 
      change = {onChangeSearchInput}
      value = {searchValue}/>
      <div className="content">
        {
          user
          .filter(data=>data.firstName.toLowerCase().includes(searchValue.toLocaleLowerCase()))
          .map((user)=>(
            
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
