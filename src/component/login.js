import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../component/login.css'
export default function Login(){

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate();
    
    const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
        ...user,
        [name]: value,
    });
    };
    const hanldeSumit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
    
        const response =  await fetch(`http://localhost:9000/register/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    
        if (response.status===200) {
            alert("login successfully!")
            navigate("/home");
        }else{
          alert("Not login");
        }
        console.log(response);
    
    } catch (error) {
        console.log("login", error);
    }
    };
    


  return (
    <div>
      <section class="backgroundd-texture"></section>
  <div class="cardd-container">
    <h2> User Login</h2>
    <form className="fform" onSubmit={hanldeSumit} >
      
      <input type="email" placeholder="Email"  id="email" onChange={handleInput} name="email" required />
      <input type="password" placeholder="Password" id="password" onChange={handleInput}  name="password" required />
      <button type="submit">Submit</button>
    </form>
    <footer>
        Register for account 
      <a href="/register"> click here</a>
    </footer>
  </div>
    </div>
  )
}