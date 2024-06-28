import React, {createContext, useReducer } from 'react';
//context provides a way to  pass data to the component tree without having to pass props down manually at each level
//initial state
import AppReducer from './AppReducer.jsx';
const initialState = {
    transactions:
    [
    {id: 1, text: 'Flower', amount: -20 },
    {id: 2, text: 'Salary', amount: 300 },
    {id: 3, text: 'Book', amount: -10 },
    {id: 4, text: 'Camera', amount: 150 },
    ]

}
//create context
export const GlobalContext = createContext(initialState);
//provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })

    }



    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}