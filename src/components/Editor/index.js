import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/monokai.css';

class Editor extends Component {
  render() {
    const { input, onBeforeChange } = this.props;
    const options = {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: false,
      scrollBarStyle: null,
      viewportMargin: Infinity,
      lineWrapping: true,
      tabSize: 4,
    };

    return (
      <div>
        <CodeMirror
          width="100%"
          value={input}
          onBeforeChange={onBeforeChange}
          options={options}
        />
      </div>
    );
  }
}

export { Editor };