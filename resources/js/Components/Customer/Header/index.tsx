import React from 'react'

type Props = {}

const HeaderCustomer = (props: Props) => {
  return (
    <header className="h-16 bg-gray-50 drop-shadow-sm">
        <div className="container m-auto flex items-center justify-between">
            <div className="h-full w-20">
            <img src="storage/images/default.png" alt="" />
            </div>
            <div>
                <button
                className="rounded-md shadow px-3 py-1.5 bg-red-700 hover:bg-red-700/80 text-sm text-white font-semibold uppercase"
                >
                    Sair
                </button>
            </div>
        </div>
    </header>
  )
}

export default HeaderCustomer