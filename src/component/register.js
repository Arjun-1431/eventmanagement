import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import '../component/register.css'
export default function Register(){

  const [user, setUser] = useState({
    name: "",
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

    const response =  await fetch(`http://localhost:9000/register/api/users`, {
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
            password: "",
        });
        navigate("/login");
    }
    console.log(response);

} catch (error) {
    console.log("register", error);
}
};

  return (
    <div>
      <section class="background-texture"></section>
  <div class="card-container">
    <h2> Create Your Account</h2>
    <form class="form"  onSubmit={hanldeSumit} method="post"  >
      <input type="text" placeholder="Name" id="name"  onChange={handleInput}  name="name" required />
      <input type="email" placeholder="Email"  id="email"  onChange={handleInput}  name="email" required />
      <input type="password" placeholder="Password"  id="password"  onChange={handleInput}  name="password" required/>
      <button type="submit">SIGN UP</button>
    </form>
    <footer>
      Already have an account?
      <a href="login"> Sign In here</a>
    </footer>
  </div>
    </div>
  )
}