import { useState } from 'react'
import { ACTIONS } from '../Actions';
import { useAuthValue } from '../contexts/AuthContext'
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authState, authDispatch] = useAuthValue();
    const handleSubmit =async (e) => {
        e.preventDefault();
        let userDetails = {
            username,password
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
            <legend>Login</legend>
            <form onSubmit={handleSubmit} >
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                <button type="submit">Login</button>
            </form>
        </fieldset>
    )
}

export default Login