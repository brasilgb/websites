import React from 'react'

interface LogoProps {
  src: any;
}

const AppLogo = ({src}: LogoProps) => {
  return (
    <div className="flex flex-col">
        <img src={src} width="100" height="18" />
    </div>
  )
}

export default AppLogo