import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  language: string,
  value: string
}

// http://conorhastings.github.io/react-syntax-highlighter/demo/prism.html

function CodeBlock(props: CodeBlockProps) {
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language || 'js'} style={atomDark} showLineNumbers>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
