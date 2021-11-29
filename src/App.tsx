import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Avatar from './Components/Avatar'
import ButtonComp from './Components/ButtonComp'
import Name from './Components/Name'
import Data from './Data/Data'


function App() {

  return (
    <div className="card-container" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            {Data.map((item:any)=>{
                return (
                    <div className="profile-card" key={item.id}>
                    <ButtonComp ></ButtonComp>
                    <Avatar imageUrl={item.imageUrl}></Avatar>
                    <Name   title={item.name}></Name>
                   
                    </div>
                );

            })}
        </div>
  )
}

export default App
