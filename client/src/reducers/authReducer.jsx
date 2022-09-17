import { ACTIONS } from "./stateReducer";
import { API } from "../api/apiRequest"; 
export const initialAuth = {
	username: null,
	firstName: null,
	lastName: null,
	auth: null,
	uid: null,
	isLoggedIn: false
};
export const setUser = ()=>{
	const newUser = localStorage.getItem("user")
	 
return newUser
}
export const login = async (userDetails) => {
	try {
		const loggedInUser = await API.post("/auth/login",{...userDetails})
		const user =await loggedInUser.data.user;
		localStorage.setItem("user",JSON.stringify(user))
		return user;
	} catch (err) {
		console.log(err)
		return err.message;
	}
}
 function  authReducer(state, action) {
	switch (action.type) {
		case "login-user":
			const loggedInUser = login(action.userDetails);
			return { ...state, user: user };
			case "set-user":
				const user = setUser()
				return {...state,user}
			
		case "auth-test":
			console.log("auth reducer running");
			return {...state,authtest:"auth test working"};
		default:
			return;
	}
}
export default authReducer;
// console.log(
// 	authReducer({ name: "chetan", lname: "alone" }, { type: "auth-test" })
// );
