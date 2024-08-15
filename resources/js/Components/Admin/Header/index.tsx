import React from "react";
import UserDropDown from "../UserDropDown";
import { Link } from "@inertiajs/react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between h-[65px] bg-gray-50 shadow-sm pr-4">
            <div className="ml-4">
                <Link
                    className="text-xs py-1.5 px-4 bg-megb-blue-primary uppercase rounded text-gray-50 font-bold hover:underline"
                    href="/"
                >
                    Ir para o site
                </Link>
            </div>
            <div className="flex items-center">
                <UserDropDown />
            </div>
        </header>
    );
};

export default Header;
