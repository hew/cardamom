import React from 'react';
import PropTypes from 'prop-types';
import {FullWidth, Pricing, Testimonials, Features} from '../components';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => (
  <section>
    <Container>
      <FullWidth style={{backgroundImage: `url(${image})`}}>
        <H2
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem'
          }}>
          {title}
        </H2>
      </FullWidth>
          <H3>{heading}</H3>
          <P>{description}</P>
      <Features gridItems={intro.blurbs} />
      <Box>
        <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
        <p>{main.description}</p>
      </Box>
      <Row>
        <Box width={[1, 1 / 2]}>
          <article>
            <img
              style={{borderRadius: '5px'}}
              src={main.image1.image}
              alt={main.image1.alt}
            />
          </article>
        </Box>
        <Box width={[1, 1 / 2]}>
          <article>
            <img
              style={{borderRadius: '5px'}}
              src={main.image2.image}
              alt={main.image2.alt}
            />
          </article>
        </Box>
        <Box width={[1, 1 / 2]}>
          <article>
            <img
              style={{borderRadius: '5px'}}
              src={main.image3.image}
              alt={main.image3.alt}
            />
          </article>
        </Box>
      </Row>
      <Testimonials testimonials={testimonials} />
      <FullWidth style={{backgroundImage: `url(${fullImage})`}} />
      <h2 className="has-text-weight-semibold is-size-2">{pricing.heading}</h2>
      <p className="is-size-5">{pricing.description}</p>
      <Pricing data={pricing.plans} />
    </Container>
  </section>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
};

const ProductPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
