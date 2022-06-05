import React from 'react';

const Section = props => (
  <section className="Section">
    {props.title} {props.children}
  </section>
);

export default Section;
