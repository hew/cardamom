import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import './all.sass'
import '../styles';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Nav />
    <Flex>
      <Container>
        {children()}
        <Footer />
      </Container>
    </Flex>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
