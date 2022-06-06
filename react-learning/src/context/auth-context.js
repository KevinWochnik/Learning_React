import react from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
