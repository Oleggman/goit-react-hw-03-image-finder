import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    error: '',
    showLoadMore: false
  }

  buildImageObj = image => {
    return {
      id: image.id,
      src: image.webformatURL,
      largeSrc: image.largeImageURL
    }
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    const isNewQuery = prevState.query !== query;
    const isNextPage = prevState.query === query && prevState.page !== page;

    if (isNewQuery || isNextPage) {
      try {
        const res = await getImageByQuery(query, page);

        if (isNewQuery) {
          if (res.hits.length === 0) {
            throw new Error('Sorry, there are no images matching your search query.')
          }
              
          this.setState({
            images: res.hits.map(this.buildImageObj),
            showLoadMore: page < Number(res.totalHits) / 12 
          })
              
          toast.success(`Hooray! We found ${res.totalHits} images!`)
        }
        if (isNextPage) {
          this.setState(prevState => ({
            images: [...prevState.images, ...res.hits.map(this.buildImageObj)],
            showLoadMore: page < Number(res.totalHits) / 12 
          }))
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        this.setState({ loading: false })
      }
    }
  }

  onSearchImage = ({ query }) => {
    this.setState({ query, page: 1, loading: true });
    window.scrollTo(0, 0);
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, loading: true }));
  }

  render() {
    const { images, loading, showLoadMore } = this.state;

    return (
      <div>
        <ToastContainer autoClose={3000}/>
        <Searchbar onSubmit={this.onSearchImage} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {showLoadMore && !loading && <Button onLoadMore={this.onLoadMore} />}
      </div>
    )
  }
}
