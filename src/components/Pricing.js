import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
   <Row>
    {data.map(price => (
      <Box w={[1, 1/3]} key={price.plan}>
        <section>
          <H4>
            {price.plan}
          </H4>
          <H2>
            ${price.price}
          </H2>
          <p>{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Box>
    ))}
  </Row>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
