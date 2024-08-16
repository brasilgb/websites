import moment from "moment"
import React from 'react'

type Props = {}

const FooterCustomer = (props: Props) => {
  return (
    <footer className="bg-gray-50 drop-shadow-md">
        <div className="container m-auto flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500 font-medium">&copy;{moment().format('YYYY')} - empresa{/*{data.config?.title}*/} . Todos os direitos reservados.</p>
            </div>
            <div>
                ok
            </div>
        </div>
    </footer>
  )
}

export default FooterCustomer