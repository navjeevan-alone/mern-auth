import {useState} from 'react'

function Signup() {
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

  return (
   <fieldset className='form login' >
        <legend>Signup</legend>
          <form >
              <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder='Username'/>
              <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='Firstname'/>
              <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} placeholder='Lastname'/>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password'/>
              <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
              <button type="submit">Signup</button>
              <button type="reset">reset</button>
          </form>
    </fieldset>
  )
}

export default Signup