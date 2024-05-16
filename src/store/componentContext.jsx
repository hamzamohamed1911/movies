import  { createContext, useState  ,useContext} from 'react'
const ComponentContext = createContext()

const ComponentProvider = ({children}) => {
  const [open, setOpen] = useState(false);

  const value ={
    open,
    setOpen,

  }
  return (
    <ComponentContext.Provider value={value}>
       {children}
    </ComponentContext.Provider>
    
  )
}

export default ComponentProvider;
export const useComponentContext = () => useContext(ComponentContext);
