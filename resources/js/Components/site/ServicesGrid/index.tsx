import ServiceContent from "./ServiceContent"
import React, { Fragment } from "react";

interface ServiceProps {
    data: any;
}

const ServicesGrid = ({ data }: ServiceProps) => {
console.log(data);

    return (
        <section className="bg-gray-50 px-4 py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {data?.map((service: any, idx: number) => (
                        <Fragment key={idx}>
                            <ServiceContent data={service} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ServicesGrid