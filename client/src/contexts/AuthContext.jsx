import React, { useReducer, useContext, createContext } from "react";
// Create Data layer
export const AuthContext = createContext();
// A funtion to quickly use values from context
export const useAuthValue = () => {
	return useContext(AuthContext);
};
//Build the Data layer and pass reducer as value
function AuthProvider({ authReducer, initialAuth, children }) {
	return (
		<AuthContext.Provider value={useReducer(authReducer, initialAuth)}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
