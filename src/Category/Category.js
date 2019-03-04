import React, { Component } from 'react';
import { Col } from 'mdbreact';

import CategoryHeader from './CategoryHeader';
import Question from '../Question/Question.js';

class Category extends Component {
  render(){
    const { title, questions } = this.props;
    return (
      <Col>
        <CategoryHeader title={title} />
        {questions.map(q => {
          return <Question key={q.front} front={q.front} back={q.back} multiple={q.multiple} categoryName={title} />
        })}
      </Col>
    )
  }
}

export default Category;
