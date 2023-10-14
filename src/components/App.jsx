import React, { Component } from 'react'
import { getImageByQuery } from 'services/image-api'
import { Searchbar } from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    query: '',
    // images: [],
    page: 1
  }

  async componentDidMount() {

  }

  async componentDidUpdate(_, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      const res = await getImageByQuery(query, 1);
      console.log(res);
    }
  }

  onSearchImage = ({ query }) => {
    this.setState({ query });
  }

  render() {
    return (
      <Searchbar onSubmit={this.onSearchImage} />
    )
  }
}
