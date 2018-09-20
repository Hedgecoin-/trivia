import React, { Component } from 'react';
import { Row } from 'mdbreact';

import Category from './Category/Category';

class Board extends Component {


  renderCategories = () => {
    const { categories } = this.props;

    return categories.map((data, i) => {
      return <Category key={i} title={data.title} />
    })
  }

  render(){
    return (
      <Row>
        {this.renderCategories()}
      </Row>
    )
  }
}

export default Board;
