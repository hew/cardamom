import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Link from 'gatsby-link';
import Button from '../components/Button';

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

  handleClose = (evt) => {
    evt.preventDefault();
    this.props.toggleConfirm();
  }

  render() {
    const {toggleConfirm, isModalOpen} = this.props;

    return (
      <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
        <p>Are you the appropriate age to view this website?</p>
        <div
          style={{display: 'flex', flexDirection: 'column', marginTop: '2em'}}>
          <div style={{marginBottom: '1em'}}>
            <Button onClick={this.handleClose}>Yes</Button>
          </div>
          <Button onClick={this.handleClose}>No</Button>
        </div>
      </Modal>
    );
  }
}

export default connect(
  (store) => ({isModalOpen: store.confirm.show}),
  (dispatch) => ({
    toggleConfirm: (i) => dispatch(toggleConfirm(i))
  })
)(Confirm);
