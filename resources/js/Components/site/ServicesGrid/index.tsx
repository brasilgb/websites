import HeaderSection from "../HeaderSection";
import ServiceContent from "./ServiceContent"
import React, { Fragment } from "react";

interface ServiceProps {
    data: any;
}

const ServicesGrid = ({ data }: ServiceProps) => {
    return (
        <section className="px-4 py-8" data-aos="zoom-in">
            <div className="container mx-auto">
            <HeaderSection title="Titulo" />
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