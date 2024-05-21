import React, { createContext, useEffect, useState } from "react";
import { testFunction } from "../../common/Functions/api";
import { Loader } from "../../ui-elements/Loader";

const initialState = {
  loading: true,
  initialized: false,
};
const AuthContext = createContext(initialState);
export function AuthProvider({ children }) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const initialFetch = async () => {
      try {
        const bible = await testFunction();
        if (bible.success) {
          setState({
            ...state,
            initialized: true,
          });
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    initialFetch();
  }, []);

  if (!state.initialized) return <Loader />;

  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
