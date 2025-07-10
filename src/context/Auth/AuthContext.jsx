import { createContext, useState, useEffect } from "react"; //

const AuthContext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
    isLoading: true,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setAuth({
        user: JSON.parse(user),
        token: token,
        isLoading: false,
      });
    } else {
      setAuth({
        user: null,
        token: null,
        isLoading: false,
      });
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuth({
      user: null,
      token: null,
      isLoading: false,
    });
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
