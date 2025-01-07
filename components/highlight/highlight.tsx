import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow';
import React, {ClassAttributes, DOMAttributes, HTMLAttributes, useEffect, useState} from "react";

SyntaxHighlighter.registerLanguage('javascript', js);

export type HighlightProps = {
  url: string
  //     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  // React. HTMLAttributes<T>.className?
  // preClassName?: HTMLAttributes<{ className?: string | undefined }>;
  preClassName?: string
  customWrapStyle?: React.CSSProperties
  customPreStyle?: React.CSSProperties
};

const defaultStyle = {width: '100%', height: '100%', overflow: 'hidden'}
const Highlight = ({
                     url,
                     preClassName,
                     customPreStyle = {},
                     customWrapStyle = {}
                   }: HighlightProps) => {
  const [text, setText] = useState<string>(null)

  useEffect(() => {
    if (url === '') return
    const get = async () => {
      const res = await (await fetch(url)).text()
      setText(res)
    }

    get()
  }, [])

  return (
    <div style={
      {
        ...defaultStyle,
        ...customWrapStyle
      }
    }>
      <div className={'h-full border-gray-300 border flex flex-col'}>
        <div className={'bg-gray-100 border-gray-300 border-b-[1px] flex items-center h-8'}>
          <span className={'bg-white text-blue-400 px-2 line- h-full border-b-[2px] text-xs  content-center border-blue-500'}>{url.split('/').pop()}</span>
        </div>
        <SyntaxHighlighter
          style={tomorrow}
          className={preClassName}
          customStyle={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            borderRadius: '5px',
            // boxShadow: 'inset 0 0 3px 1px #dfdfdf',
            ...customPreStyle
          }}>
          {text}
        </SyntaxHighlighter></div>
    </div>
  );
};
export default Highlight;