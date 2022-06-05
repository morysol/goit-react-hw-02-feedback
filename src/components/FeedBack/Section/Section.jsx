import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => (
  <section className="Section">
    {title} {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
export default Section;
