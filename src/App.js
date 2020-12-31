import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [user, setUser] = useState(data);
 
  return (
    <>
    <section className="container">
      <h3>{user.length} birthday today</h3>
      <List user = {user}/>
      <button className="btn" onClick={()=>{
        setUser([])
      }}>Clear birthday</button>
    </section>
    </>
  );
}

export default App;
