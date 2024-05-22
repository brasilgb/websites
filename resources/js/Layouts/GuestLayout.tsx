import FooterLayout from "@/Components/site/layouts/footer";
import HeaderLayout from "@/Components/site/layouts/header";
import { Head, usePage } from '@inertiajs/react';
import { ReactNode } from "react";

interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
    const { conf, cat, pag } = usePage().props;
    return (
        <main className="bg-gray-200 flex flex-col min-h-screen antialiased">
            <Head>
                <title>title</title>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the default description"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <HeaderLayout data={{conf, cat, pag}}  />
            <div className="flex-grow">
                {children}
            </div>
            <FooterLayout  data={conf} />
        </main>
    );
};
export default GuestLayout;
