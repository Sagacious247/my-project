import React, { useState } from 'react'

const ShowOnLogin = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    if(isLoggedIn) {
        return children
    }
    return null
}
export const ShowOnLogOut = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    if(!isLoggedIn) {
        return children
    }
    return null
}

export default ShowOnLogin;