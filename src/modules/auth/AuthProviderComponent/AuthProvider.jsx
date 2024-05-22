import React, { createContext, useEffect, useState } from "react";
import { initialBooks } from "../../common/APIFunctions/allBooks";
import { Loader } from "../../ui-elements/Loader";

const initialState = {
  loading: true,
  initialized: false,
  allBooks: [],
};
const AuthContext = createContext(initialState);
export function AuthProvider({ children }) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const initialFetch = async () => {
      try {
        const booksData = await initialBooks({ limit: 10, page: 1, offset: 1 });
        if (booksData.success) {
          setState({
            ...state,
            initialized: true,
            allBooks: booksData.data,
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
    <AuthContext.Provider value={{ ...state, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
