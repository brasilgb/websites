
import Header from "@/Components/Admin/Header";
import Footer from "@/Components/Admin/Footer";
import { ReactNode } from "react";
import Sidebar from "@/Components/Admin/SideBar";
interface AutenticatedLayoutProps {
    children: ReactNode;
}
export default function Authenticated({ children }: AutenticatedLayoutProps) {

    return (
        <div className="min-h-screen bg-gray-300">
            <main className="flex min-h-screen flex-row bg-gray-100">
                <div className="bg-megb-blue-primary">
                    <Sidebar />
                </div>
                <div className="flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0 bg-gray-100">
                    <Header />
                    <div className="flex h-full items-start justify-start p-4">
                        {children}
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}