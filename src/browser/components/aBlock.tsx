import * as React from 'react';

function ABlock(props: { href: string, children: any[] }) {
  return (
    <a href={props.href} target="__blank">{props.children[0].props.value}</a>
  );
}

export default ABlock;
