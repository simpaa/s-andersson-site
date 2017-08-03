import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header';
import Footer from '../components/footer';
import Data from '../data/SiteConfig';

import './index.css'

const TemplateWrapper = ({
  children
}) => (
    <div className="site-wrapper">
      <Helmet
        title={`${Data.siteTitle} - Creative developer`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
