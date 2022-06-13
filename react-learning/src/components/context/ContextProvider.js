import UserContext from "./user-context";

const ContextProvider = ({ children }) => {
  const userContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
