import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <div className = "container">
//         {
//           a.map((e, key, h) => {
//             return (
//               <div className="abc">


//                 <img src={e.image} alt="" /> <br />
//                 {e.name} <br />
//                 <button onClick={(e) => { show(e) }}>Details</button>
              

//               </div>
//             )
//           })



//         }
// </div>
