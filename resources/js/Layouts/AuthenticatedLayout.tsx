import { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';
import Sidebar from "@/Components/Admin/SideBar";
import Header from "@/Components/Admin/Header";
import Footer from "@/Components/Admin/Footer";

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {

    return (
        <div className="min-h-screen bg-gray-300">
            <main className="flex min-h-screen flex-row bg-gray-100">
                <div className="md:w-64 bg-megb-blue-primary">
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