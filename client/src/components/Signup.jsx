import { useState } from 'react'
import { ACTIONS } from '../Actions';
import { useAuthValue } from '../contexts/AuthContext'
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authState, authDispatch] = useAuthValue();
    const handleSubmit =async (e) => {
        e.preventDefault();
        let userDetails = {
            email,password
        }
        try {
            await authDispatch({type:"login-user",userDetails:{...userDetails}})            
         await authDispatch({type:"set-user"})      
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <fieldset className='form login' >
            <legend>Signup</legend>
            <form onSubmit={handleSubmit} >
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Username' />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                <button type="submit">Signup</button>
            </form>
        </fieldset>
    )
}

export default Signup