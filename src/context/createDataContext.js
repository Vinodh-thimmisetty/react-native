import React, { useReducer } from 'react';


export default (reducerFn, dispatchers, initialState) => {
    const Context = React.createContext();
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducerFn, initialState);

        const boundActions = {};
        for (let action in dispatchers) {
            boundActions[action] = dispatchers[action](dispatch);
        }

        return (
            <Context.Provider value={{
                state,
                ...boundActions
            }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider };

}