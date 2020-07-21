import React from 'react';
import './App.css';
import List from './zak';
import * as name from './list';
import Search,{onSearch,searchedUsers} from './search';

const useSemiPersistanceState =(key,initialState)=>{
  const [value, setValue] = React.useState(
      localStorage.getItem(key)||initialState);
  React.useEffect(()=>{
      localStorage.setItem(key,value);
  },[value,key]);
  return [value,setValue];
}


 const App=()=> { 
/*
  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search')||('Redux'));
  React.useEffect(()=>{
    localStorage.setItem('search',searchTerm);
  },[searchTerm]);
  */
 const [searchTerm,setSearchTerm]= useSemiPersistanceState('search','React');
const [pwd,setPwd]= useSemiPersistanceState('password','abc');
    const handleSearch = event => {
        setSearchTerm(event.target.value);
     
    };
  const searchedUsers = name.user.filter(us =>
    us.title.toLowerCase().includes(searchTerm.toLowerCase())

);

return (
  <div>


    <List  lista={searchedUsers}  />
    <Search onSearch={handleSearch}  search={searchTerm}/>
    
  </div>
)
}



export default App;
/*
   
*/