import { usePage } from "@inertiajs/react";
interface ApplicationLogoProps {
    className?: string;
}
const ApplicationLogo = ({className}: ApplicationLogoProps) => {
    const { datasite } = usePage().props as any;
console.log(datasite);

    return (
            <div className={className}>
                <img
                src={`/storage/images/${datasite.config?.logo ? datasite.config?.logo : "default.png"}`}
                alt="Logo"
            />
            </div>
    );
};

export default ApplicationLogo;