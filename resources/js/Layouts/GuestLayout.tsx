import FooterLayout from "@/Components/site/layouts/footer";
import HeaderLayout from "@/Components/site/layouts/header";
import { Head, usePage } from '@inertiajs/react';
import React, { ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";
import image from '@/svg/arrow-top.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {

    const { datasite } = usePage().props as any;
    return (
        <>
             <Head>
                <title>{`${datasite?.config?.metatitle}`}</title>
                <meta name="description" head-key="description" content={datasite?.config?.metadescription} />
                <meta name="keywords" head-key="keywords" content={datasite?.config?.metakeyword} />
                <link rel="icon" type="image/svg+xml" href={`/storage/images/${datasite?.config?.featured}`} />
            </Head> 
            <main className="bg-gray-200 flex flex-col min-h-screen antialiased">
                <ScrollToTop smooth component={<div className="bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 h-full flex items-center justify-center rounded shadow-md">
                    <img className="mx-auto size-6" src={image} />
                </div>} />

                <HeaderLayout data={datasite} />
                <div className="flex-grow">
                    {children}
                </div>
                <FooterLayout data={datasite} />
            </main>
        </>
    );
};
export default GuestLayout;
