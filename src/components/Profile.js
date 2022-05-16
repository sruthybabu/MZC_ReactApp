import React, { useState } from 'react'

const Profile = () => {
  var [name,setName]=useState("") 
  

const changeName=()=>{
    setName(
        name="Sudhi"
        )
}
  return (
    <div>Logged in as {name}
    <button onClick={changeName} className='btn btn-success'>Change</button>
    
    </div>
  )
}

export default Profile