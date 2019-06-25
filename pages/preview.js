import React, { Component } from 'React'
import Router, { withRouter } from 'next/router'
import linkResolver from '../lib/linkResolver'
import { getAPI } from '../lib/api'

class Preview extends Component {
  componentDidMount = () => {
    this.preview()
  }
  
  preview = async () => {
    const api = await getAPI()
    api.previewSession(this.props.router.query.token, linkResolver)
      .then(url => {
        Router.push(url);
      });
  }
  
  render() {
    return <p>Loading preview...</p>
  }
}

export default withRouter(Preview)