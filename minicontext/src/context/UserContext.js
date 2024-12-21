import React from "react";

const UserContext = React.createContext();

export default UserContext;

// wrap any component with <UserContext.Provider value={value}> to make the value available to all children
