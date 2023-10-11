import React, { useState } from 'react'

function AdminOnlyRoute({Children}) {
  const [email, setEmail] = useState('')

  if(email === "kingpaulosk96@gmail.com") {
    return Children
  }
  return null
}

export default AdminOnlyRoute