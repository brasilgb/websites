import React, { ReactNode } from 'react'

interface MarkProps {
    children: ReactNode;
}

const BrandContent = ({ children }: MarkProps) => {
    return (
        <div className="bg-white rounded-md shadow-md p-8 duration-500 hover:scale-105 hover:shadow-lg">
            {children}
        </div>
    )
}

export default BrandContent