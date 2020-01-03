import * as React from "react";
import { Prism as SyntaxHighlighter ***REMOVED*** from "react-syntax-highlighter";
import { atomDark ***REMOVED*** from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  language: string,
  value: string
***REMOVED***

// http://conorhastings.github.io/react-syntax-highlighter/demo/prism.html

function CodeBlock(props: CodeBlockProps) {
  const { language, value ***REMOVED*** = props;
  return (
    <SyntaxHighlighter language={language || 'js'***REMOVED*** style={atomDark***REMOVED*** showLineNumbers>
      {value***REMOVED***
    </SyntaxHighlighter>
  );
***REMOVED***

export default CodeBlock;
