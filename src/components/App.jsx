import React, { Component } from 'react'
import { getImageByQuery } from 'services/image-api'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1
  }

  async componentDidMount() {

  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      console.log(0);
      const res = await getImageByQuery(query, 1);
      this.setState({
        images: res.hits.map(hit => ({
          id: hit.id,
          src: hit.webformatURL,
          largeSrc: hit.largeImageURL
        })),
        page: 1
      })
    }

    if (prevState.query === query && prevState.page !== page) {
      console.log(1);
      const res = await getImageByQuery(query, page);

      this.setState(prevState => ({
        images: [...prevState.images,
        ...res.hits.map(hit => ({
          id: hit.id,
          src: hit.webformatURL,
          largeSrc: hit.largeImageURL
        })) ]
      })
      )
    }
  }

  onSearchImage = ({ query }) => {
    this.setState({ query });
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSearchImage} />
        <ImageGallery images={this.state.images} />
        {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    )
  }
}
