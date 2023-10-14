import React, { Component } from "react";
import { Image } from "./ImageGalleryItem.styled"
import { ModalImage } from "components/ModalImage/ModalImage";

export default class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false
  }

  toggleModal = () => {
    this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen }));
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { src, largeSrc, tags } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <>
        <Image onClick={this.toggleModal} src={src} alt={tags} />
        <ModalImage src={largeSrc} tags={tags} modalIsOpen={modalIsOpen} closeModal={this.closeModal} />
      </>
    )
  }
}
