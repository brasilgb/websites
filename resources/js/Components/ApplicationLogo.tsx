import { usePage } from "@inertiajs/react";
interface ApplicationLogoProps {
    className?: string;
}
const ApplicationLogo = ({className}: ApplicationLogoProps) => {
    const { datasite } = usePage().props as any;

    return (
            <div className={className}>
                <img
                src={`/storage/images/${datasite.conf?.logo ? datasite.conf?.logo : "default.png"}`}
                alt="Logo"
            />
            </div>
    );
};

export default ApplicationLogo;