import { createContext} from "react";


const initialState ={
   name: 'Flávio Eduardo',
   age: 40
}

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {
   return(
      <Context.Provider value={initialState}>
         {children}
      </Context.Provider>
         
      
   )
}