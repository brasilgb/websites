import { LabelHTMLAttributes } from 'react';

export default function InputLabel({ value, className = '', children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-50 ` + className}>
            {value ? value : children}
        </label>
    );
}
