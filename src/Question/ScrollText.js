import React, { Component } from 'react';

class ScrollText extends Component {
  state = {
    scrollLength: 0,
    scrolling: false,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.toggleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.toggleScroll);
  }

  toggleScroll = (e) => {
    if(e.key === 's'){
      this.setState({ scrolling: !this.state.scrolling });
      this.scrollText();
    }
  }

  scrollText = () => {

    const { scrollLength, scrolling } = this.state;
    const { text } = this.props;

    setTimeout(() => {
      this.setState({ scrollLength: scrollLength + 1 });
      if(scrolling && scrollLength < text.length){
        this.scrollText();
      }
    }, 50);
  }

  render(){
    const { scrollLength } = this.state;
    const { text } = this.props;

    let textToShow = text.substr(0, scrollLength);

    return (
      <div style={{ minHeight: '250px', fontSize: '24px'}}>
        {textToShow}
      </div>
    )
  }
}

export default ScrollText;
