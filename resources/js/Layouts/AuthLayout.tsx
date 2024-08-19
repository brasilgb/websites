import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6 sm:pt-0 bg-megb-blue-login">
            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-gradient-to-t from-megb-blue-plus via-megb-blue-plus/80 to-megb-blue-plus shadow-md overflow-hidden rounded-md border-2 border-gray-700">
                <div className="flex justify-center my-8">
                    <Link href="/">
                        <ApplicationLogo className="w-32 h-32 fill-current text-gray-200" />
                    </Link>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
