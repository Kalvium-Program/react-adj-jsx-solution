import React from 'react';
import './App.css';

function App() {
  return(
    <div className="main">
      <h1>Hey Kalvians</h1>
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;