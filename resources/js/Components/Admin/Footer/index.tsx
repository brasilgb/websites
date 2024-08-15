import React from 'react';
import moment from 'moment';

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-betwen py-2 px-4 border-t bg-gray-50">
    <div className="flex flex-1 justify-start">
        <p className="text-sm font-normal text-gray-700">
            {moment().format('YYYY')}&copy; - empresa
        </p>
    </div>
    <div className="flex flex-1 justify-end">
        <span className="text-sm text-megb-yellow font-semibold">MEGB</span>
    </div>
</footer>
  );
};

export default Footer;
