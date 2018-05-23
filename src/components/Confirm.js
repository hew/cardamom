import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Link from 'gatsby-link';

// Wire up Redux
import {connect} from 'react-redux';
import {toggleConfirm} from '../state/confirm-state';

const modalStyles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  content: {
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'transparent',
    padding: '20px',
    border: `3px solid black`,
    overflow: 'none'
  }
};

class Confirm extends React.Component {
  state = {toggleAnimation: true};
  componentDidMount() {
    console.log('yehaa');
  }

  render() {
    const {toggleConfirm, isModalOpen} = this.props;

    return (
      <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
        <p>hey</p>
      </Modal>
    );
  }
}

export default connect(
  (store) => ({isModalOpen: store.confirm.show}),
  (dispatch) => ({
    toggleConfirm: (i) => dispatch(toggleModal(i))
  })
)(Confirm);
