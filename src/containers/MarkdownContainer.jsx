import React, { Component } from 'react';

import { MarkdownLayout, Positioner, ShadowedBox } from '../styledComponents';

import { Editor } from '../components/Editor';
import { Viewer } from '../components/Viewer';

class MarkdownContainer extends Component {
  render() {
    const { input, onBeforeChange } = this.props;
    return (
      <Positioner className="markdown">
        <MarkdownLayout>
          <ShadowedBox>
            <div className="editor-box">
              <Editor input={input} onBeforeChange={onBeforeChange} />
            </div>
            <div className="viewer-box">
              <Viewer input={input} />
            </div>
          </ShadowedBox>
        </MarkdownLayout>
      </Positioner>
    );
  }
}

export default MarkdownContainer;
