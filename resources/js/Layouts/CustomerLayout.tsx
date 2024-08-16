import FooterLayout from "@/Components/site/layouts/footer";
import HeaderLayout from "@/Components/site/layouts/header";
import { Head, usePage } from '@inertiajs/react';
import React, { ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";
import image from '@/svg/arrow-top.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderCustomer from "@/Components/Customer/Header";
import FooterCustomer from "@/Components/Customer/Footer";
AOS.init();
interface CustomerLayoutProps {
    children: ReactNode;
}

const CustomerLayout = ({ children }: CustomerLayoutProps) => {

    const { datasite } = usePage().props as any;
    return (
        <>
             <Head>
                <title>OK </title>
                {/* <meta name="description" head-key="description" content={datasite?.config?.metadescription} />
                <meta name="keywords" head-key="keywords" content={datasite?.config?.metakeyword} />
                <link rel="icon" type="image/png" href="favicon.png" sizes="8x8" /> */}
            </Head> 
            <main className="bg-gray-200 flex flex-col min-h-screen antialiased">
                <HeaderCustomer />
                <div className="flex-grow">
                    {children}
                </div>
                <FooterCustomer />
            </main>
        </>
    );
};
export default CustomerLayout;
