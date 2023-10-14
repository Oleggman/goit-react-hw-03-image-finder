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

  getFirstImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true, page: 1 })

    try {
      const res = await getImageByQuery(query, 1);
      if (res.hits.length === 0) {
      throw new Error('Sorry, there are no images matching your search query.')
      }
        
      this.setState({
        images: res.hits.map(this.buildImageObj),
        showLoadMore: page < Number(res.totalHits) / 12 
      })
        
      toast.success(`Hooray! We found ${res.totalHits} images!`)
    } catch (error) {
      toast.error(error.message);
    } finally {
      this.setState({ loading: false })
    }
  }

  getOtherImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true })

    try {
      const res = await getImageByQuery(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...res.hits.map(this.buildImageObj)],
        showLoadMore: page < Number(res.totalHits) / 12 
      }))
    } catch (error) {
      toast.error(error.message);
    } finally {
      this.setState({ loading: false })
    }
  }

  async componentDidUpdate(_, prevState) {
    const { query, page, loading } = this.state;

    if (prevState.query !== query) {
      this.getFirstImages();
    }

    if (prevState.query === query && prevState.page !== page && !loading) {
      this.getOtherImages();
    }
  }

  onSearchImage = ({ query }) => {
    this.setState({ query });
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { images, loading, showLoadMore } = this.state;

    return (
      <div>
        <ToastContainer autoClose={3000}/>
        <Searchbar onSubmit={this.onSearchImage} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {showLoadMore && <Button onLoadMore={this.onLoadMore} />}
      </div>
    )
  }
}
