import { Link } from '@inertiajs/react'

interface LinkProps {
    url?: any;
    openSide: any;
    icon: any;
    label: string;
    active: boolean;
}
const SideLink = (props: LinkProps) => {
   
    return (
        <li>
            <Link
                className={`flex items-center h-10 p-2 text-sm gap-x-2 rounded-md hover:bg-white hover:bg-opacity-40
                ${props.active ? "bg-white text-blue-primary font-medium" : "text-white"}`}
                href={props.url}
            >
                <div className={`${!props.openSide && 'py-0'}`}>
                    {props.icon}
                </div>
                <div className={`${!props.openSide && "hidden"} origin-left duration-300`}>{props.label}</div>
            </Link>
        </li>
    )
}

export default SideLink