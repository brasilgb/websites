import React from 'react'
import HeaderLayout from "./header";
import FooterLayout from "./footer";

interface MainProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainProps) => {
    return (
        <main className="bg-gray-200 flex flex-col min-h-screen antialiased">
            <HeaderLayout />
            <div className="flex-grow">
                {children}
            </div>
            <FooterLayout />
        </main>

    )
}

export default MainLayout