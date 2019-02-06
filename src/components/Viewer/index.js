import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Viewer extends Component {
  render() {
    const { input } = this.props;

    return (
      <ReactMarkdown sourcePos={false} source={input} skipHtml escapeHtml />
    );
  }
}

export { Viewer };
