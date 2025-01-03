import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow';
import GetContent from "../../utils/methods/getContent";
import {useEffect, useState} from "react";

SyntaxHighlighter.registerLanguage('javascript', js);

export type HighlightProps = {
  url: string
  customStyle?: React.CSSProperties
};

const defaultStyle = {width: '100%', height: '100%', overflow: 'hidden'}
const Highlight = ({url, customStyle = {}}: HighlightProps) => {
  const [text, setText] = useState<string>(null)

  useEffect(() => {
    GetContent(url)
      .then(res => {
        setText(res)
      })

  }, [])

  return (
    <div style={
      {
        ...defaultStyle,
        ...customStyle
      }
    }>
      <SyntaxHighlighter language="javascript"
                         style={tomorrow}
                         customStyle={{width: '100%', height: '100%', overflow: 'auto'}}>
        {text}
      </SyntaxHighlighter>
    </div>
  );
};
export default Highlight;



