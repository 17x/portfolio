import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow';

SyntaxHighlighter.registerLanguage('javascript', js);

type Props = {};
const Highlight = (props: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {
        `const a = 998;\n\nlet a = 10;        `
      }
    </SyntaxHighlighter>
  );
};
export default Highlight;



