import React, {Component} from 'react';
import NavModal from '../components/NavModal.js';
import Link from 'gatsby-link';
import '../styles';
import DownArrow from './DownArrow';
import {navItems as items} from '../data';

// Wire it up to the modal
import {connect} from 'react-redux';
import {toggleNavModal} from '../state/nav-modal-state';

class Nav extends Component {
  render() {
    const {isModalOpen} = this.props;
    const buttonStyles = {
      cursor: 'pointer',
      display: 'inline-block'
    };

    return (
      <Box py={3} >
        <Container>
          <Flex align="center">
            <Box mt={2}>
              <Link to="/" style={buttonStyles}>
                 <H4>{'Home'}</H4>
              </Link>
            </Box>
            <Row is="ul" display={['none', 'flex']} ml="auto">
              {items.map(
                (x, i) =>
                  x.external ? (
                    <li key={i.toString()}>
                      <a href={x.link}>
                        <H4 m={0} px={1}>
                          {x.text}
                        </H4>
                      </a>
                    </li>
                  ) : (
                    <li key={i.toString()}>
                      <Link
                        activeClassName="--active"
                        to={x.link}
                        style={buttonStyles}>
                        <H4 m={0} px={2}>
                          {x.text}
                        </H4>
                      </Link>
                    </li>
                  )
              )}
            </Row>
            <Flex display={['flex', 'none']} align="center" ml="auto">
              <a
                style={{
                  position: 'relative',
                  zIndex: '9',
                  ...buttonStyles
                }}
                onClick={() => this.props.toggleNavModal(!isModalOpen)}>
                <DownArrow />
              </a>
            </Flex>
            <NavModal items={items} open={isModalOpen} />
          </Flex>
        </Container>
      </Box>
    );
  }
}

export default connect(
  (store) => ({isModalOpen: store.navModal.show}),
  (dispatch) => ({
    toggleNavModal: (i) => dispatch(toggleNavModal(i))
  })
)(Nav);
