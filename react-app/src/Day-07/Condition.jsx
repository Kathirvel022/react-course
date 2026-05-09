import React from 'react'

const Condition = () => {
    const isLogin = false
  
    
     {/* {isLogin ? "Welcome" : "Please Login" } */}
     if (isLogin)
        return <h2> "Welcome" </h2>
    else
        return <h2> "Please Login" </h2>
        
}

export default Condition
