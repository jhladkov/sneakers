import React, {FC} from 'react';

interface SectionProps {
    className: string;
    children: any
}

const Section:FC<SectionProps> = ({className,children}) => {
    return (
        <section className={className}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;