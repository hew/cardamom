import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <Row>
    {gridItems.map(item => (
      <Box w={[1, 1/2]} key={item.image}>
        <section>
          <P>
            <img alt="" src={item.image} />
          </P>
          <p>{item.text}</p>
        </section>
      </Box>
    ))}
  </Row>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
