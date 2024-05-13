import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../component/feedback.css'
export default function Feedback (){

  const [user, setUser] = useState({
    name: "",
    email: "",
     message:"",
  
    
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

    const response =  await fetch(`http://localhost:9000/feedback/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(user),
    });

    if (response.status===200) {
        setUser({
            name: "",
            email: "",
             message:"",
        });
        alert("feedback sent successfully!")
        navigate("/home");
    }
    console.log(response);

} catch (error) {
    console.log("bookevent", error);
}
};

    return(
        <>
        
  <h1 className='head'>Give Your Feedback</h1>
  <p>Please fill out this form for the query related to organization</p>
  <form onSubmit={hanldeSumit} method="post" className='foorm' >
    
    <fieldset className='field'>
      <label className='level'>Name</label>
        <input type="text" id="name"  onChange={handleInput} name="name" required />
     
      <label className='level'>Email</label>
      <input type="email" id="email" onChange={handleInput} name="email" required />
      
     
      <label className='level'>Message</label>
      <textarea  id="message" onChange={handleInput} name="message" rows="5" cols="30" placeholder="Your message ..."></textarea>
      
    </fieldset>
    <input type="submit" value="Submit" className="submitt-button"  />
  </form>

        </>
    )
}