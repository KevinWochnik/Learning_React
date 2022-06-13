import React from 'react';

const UserContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
})

export default UserContext