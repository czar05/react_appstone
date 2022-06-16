import React from "react";


import List from "./List";
function Home() {
   
  return (
    <div>
      <h1>Appstone App</h1>

      <div className="container">
        <div className="row">
          
          <div className="col-sm">
            <h2>Users list</h2>
            <List/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
