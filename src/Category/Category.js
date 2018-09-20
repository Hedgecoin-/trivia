import React, { Component } from 'react';
import { Col } from 'mdbreact';

import CategoryHeader from './CategoryHeader';

class Category extends Component {
  render(){
    const { title } = this.props;
    return (
      <Col>
        <CategoryHeader title={title} />
      </Col>
    )
  }
}

export default Category;
