import './App.css';

import a from './a.json';
import Detail from './detail';
import React, { useState } from 'react'

function App() {
  const [ab,seta] = useState(false);
  const [user,setUser] = useState({
    name : "",
    price : "",
    link :"",
    imgage : "",
  });

const b = (key) => {
 
  console.log(user.name)

  seta(!ab)

}

const c = (key) => {
  setUser({
    name: a[key].name,
    price: a[key].price,
    link: a[key].link,
    image: a[key].image
  })
  seta(!ab)
}
  return (
    <div className="App">
      <h1>
        <i class="fa-light fa-hexagon-image"></i>
      Gallerify</h1>

      <div className="container">
        {
          a.map((e, key) => {
            return (
              <>
                <div className="abc">
                  <div className = "abcimg">   <img src={e.image} alt="" /> <br /></div>
                  <div className= "abcname"> {e.name} <br />
                    <button style={{ borderRadius: "19px", padding: " 1px 8px", background: "#fc5432",color : "white",margin : "15px" ,border : "2px solid #fc5432"}} className = "button" onClick={() => {c
                      (key)}}>Details</button></div>
                </div>
              
              </>
            )
          })
        }
      </div>
     <div className = "Detail">
        {
          ab && <div className="detail">
            <img src={user.image}></img>
            <div>
              <button onClick={b} id = "button">✖</button>
              <h3> <span>Name :</span> {user.name}</h3>
              <h3> <span>Price : </span> {user.price} Rs</h3>
              <p> <span>Shopping link : </span> <a href={user.link}>Click here</a> </p></div>
          </div>
        }
     </div>
    </div>
  );
}

export default App;
