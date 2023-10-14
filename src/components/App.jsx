import React, { Component } from 'react'
import { getImageByQuery } from 'services/image-api'

export default class App extends Component {

  async componentDidMount() {
        const res = await getImageByQuery("cat", 1);
        console.log(res)
  }

  render() {
    return (
      <div>App</div>
    )
  }
}
