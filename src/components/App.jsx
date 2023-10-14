import React, { Component } from 'react'
import { getImageByQuery } from 'services/image-api'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: ''
  }

  buildImageObj = image => {
    return {
      id: image.id,
      src: image.webformatURL,
      largeSrc: image.largeImageURL
    }
  }

  async componentDidUpdate(_, prevState) {
    const { query, page, loading } = this.state;

    if (prevState.query !== query) {
      this.setState({ loading: true, page: 1 })

      try {
        const res = await getImageByQuery(query, 1);
        this.setState({
          images: res.hits.map(this.buildImageObj),
        })
      } catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ loading: false })
      }
    }

    if (prevState.query === query && prevState.page !== page && !loading) {
      this.setState({ loading: true })

      try {
        const res = await getImageByQuery(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...res.hits.map(this.buildImageObj) ]
        }))
      } catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ loading: false })
      }
    }
  }

  onSearchImage = ({ query }) => {
    this.setState({ query });
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSearchImage} />
        <ImageGallery images={this.state.images} />
        {loading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    )
  }
}
