import FooterLayout from "@/Components/site/layouts/footer";
import HeaderLayout from "@/Components/site/layouts/header";
import { Head, usePage } from '@inertiajs/react';
import React, { ReactNode } from "react";
import ScrollToTop from "react-scroll-to-top";
import image from '@/svg/arrow-top.svg'
interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
    const { conf, cat, pag } = usePage().props;
    return (
        <main className="bg-gray-200 flex flex-col min-h-screen antialiased">
            <ScrollToTop smooth component={<div className="bg-gradient-to-b from-megb-blue-primary via-megb-blue-secundary to-megb-blue-primary bg-megb-blue-secundary h-full flex items-center justify-center rounded shadow-md">
                <img className="mx-auto size-6" src={image} />
            </div>} />
            <Head>
                <title>title</title>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the default description"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <HeaderLayout data={{ conf, cat, pag }} />
            <div className="flex-grow">
                {children}
            </div>
            <FooterLayout data={conf} />
        </main>
    );
};
export default GuestLayout;
