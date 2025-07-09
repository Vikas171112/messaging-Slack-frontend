import { createContext, useState } from "react";
const AuthContext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: "", token: "" });
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setAuth({
        user: JSON.parse(user),
        token,
      });
    } else {
      setAuth({
        user: null,
        token: null,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
