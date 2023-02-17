import React,{useState,useEffect} from 'react'

const Form = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
   
    const hadleApi = (e) => {
      e.preventDefault()
      console.log({
        email : email,
        password: password})
    }
  return (
   <>
   <form>
    <input type="text" value={email} name="email" onChange={(e) =>setEmail(e.target.value)}/>
    <input type="text" value={password} name="password"  onChange={(e) =>setPassword(e.target.value)}/>
    <button onClick={hadleApi}>Submit</button>
   </form>
   </>
  )
}

export default Form;