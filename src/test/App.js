import logo from '../logo.svg';
import '../App.css';
import Child from './child'; 
import React, { useState } from 'react';


function App() {
  const [name,setName]=useState();
  const [hide,setHide]=useState(false)
  const [test8,setTest8]=useState('TEst')
  const [test4,setTest4]=useState('Tekt')
  const typeTest=(e)=>{
    setTest4(e.target.value)
  }
 
  // let name="fdsfdf";

  //let firstName

  // let nu=1223;
  // let boo =true;
  // let list=[2,3,5,6]
  //const name="Henry";

  const getName=()=>{
    alert("this is my app")
  }

  const onChangeName=(event)=>{   
    setName(event.target.value)

    switch(event.target.value) {
      case "Surjit":
        setHide(true)
        break;
      case "Henry":
        setHide(true)
        break;
      case "Santibala":
        setHide(true)
        break;
      default:
        setHide(false)
    }

    // if(event.target.value=="henry" || event.target.value=="surjit" ){
    //   setHide(true)
    // }
    // else if(event.target.value=="santibala"){
    //   setHide(true)
    // }
    // else{
    //   setHide(false)
    // }

  }

  const texu=(e)=>{
    setTest8(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div> User  name:
       <input type="text"  value={name} placeholder='Eneter User Name' onChange={onChangeName}></input>
       {hide && <div> He is the best</div> }
       <Child textone={name}></Child>
         {/* <input type="text" value={name} onChange={onChangeName}/> 
         <div style={{marginLeft:'100px'}}><input type="text" value={test8} onChange={texu}></input></div>
         <input type="password" value={test4} onChange={typeTest}></input> */}
</div>
</div>
{/* <Child first={name} 
></Child> */}
      </header>
    </div>
  );
}

export default App;
