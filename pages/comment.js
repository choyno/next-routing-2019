import React, {Component} from 'react';

export default  class Comment extends Component {

  static async getInitialProps({ query }) {
    return {slug: query.slug }
  }

  constructor(props){
    super(props)
  }

  render(){

    console.log(this.props.slug)

    return (
      <div>
        This is comment
      </div>
    )
  }

}
