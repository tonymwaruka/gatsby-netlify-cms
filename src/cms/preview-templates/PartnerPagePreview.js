import React from 'react'
import PropTypes from 'prop-types'
import { PartnerPageTemplate } from '../../templates/partner-page'

const PartnerPagePreview = ({ entry, widgetFor }) => (
  <PartnerPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PartnerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PartnerPagePreview