import moment from "moment"
import React from 'react'

interface FooterProps {
  data: any;
}

const FooterCustomer = ({data}: FooterProps) => {

  return (
    <footer className="bg-gray-50 drop-shadow-md">
        <div className="container m-auto flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500 font-medium">&copy;{moment().format('YYYY')} - {data.config?.title} . Todos os direitos reservados.</p>
            </div>
            <div>
            <a href="https://megb.com.br" target="_blank" rel="noopener noreferrer" title='Dsenvolvido por MEGB'>
                <span className='text-sm font-bold text-gray-500 drop-shadow-md'>MEGB</span>
              </a>
            </div>
        </div>
    </footer>
  )
}

export default FooterCustomer