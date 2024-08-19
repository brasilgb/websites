import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `items-center py-3 rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-megb-red-primary  hover:bg-megb-red-primary/90 focus:bg-megb-red-primary active:bg-megb-red-primary/90 focus:outline-none focus:ring-2 focus:ring-megb-red-primary focus:ring-offset-2 transition ease-in-out duration-150 shadow-md border border-transparent ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}