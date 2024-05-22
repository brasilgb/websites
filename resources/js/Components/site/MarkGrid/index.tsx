import React from 'react'
import MarkContent from "./MarkContent"

type Props = {}

const MarkGrid = (props: Props) => {
    return (
        <section className="flex justify-center items-center p-8 bg-gray-100">
            <div className="container mx-auto flex justify-center max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 text-gray-500 lg:grid-cols-5 items-center">
                    <MarkContent>
                        <img width={60} src="/marcas/apple.svg" />
                    </MarkContent>
                    <MarkContent>
                        <img width={60} src="/marcas/asus.svg" />
                    </MarkContent>
                    <MarkContent>
                        <img width={60} src="/marcas/hp.svg" />
                    </MarkContent>
                    <MarkContent>
                        <img width={60} src="/marcas/samsung.svg" />
                    </MarkContent>
                    <MarkContent>
                        <img width={60} src="/marcas/xiaomi.svg" />
                    </MarkContent>
                </div>
            </div>
        </section>
    )
}

export default MarkGrid