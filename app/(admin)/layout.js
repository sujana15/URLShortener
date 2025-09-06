import React, { Children } from 'react'

const layout = ({children}) => {
  return (
    <div>
      <span>admin navbar</span>
      {children}
    </div>
  )
}

export default layout
