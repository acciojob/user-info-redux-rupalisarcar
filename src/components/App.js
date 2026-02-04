
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { setName,setEmail } from "../redux/userInfoSlice";

const App = () => {
  const dispatch = useDispatch();
  const {name, email} = useSelector((state) => state.UserInfo);

  const handleNameChange = (e) =>{
    dispatch(setName(e.target.value))
  }

  const handleEmailChange = (e) =>{
    dispatch(setEmail(e.target.value))
  }

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <input type="text" value={name} placeholder="Enter name" onChange={handleNameChange}/>
        <input type="email" placeholder="Enter email" onChange={handleEmailChange}/>
      </div>
    
      <div style={{marginTop:'30px'}}>
        <h2>Live Display</h2>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
