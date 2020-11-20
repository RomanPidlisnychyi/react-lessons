import React from 'react';
import PropsTypes from 'prop-types';

function Section({ title, children }) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

Section.defaultProps = {
    title: '',
};

Section.propsTypes = {
    title: PropsTypes.string,
    children: PropsTypes.node,
};

export default Section;
