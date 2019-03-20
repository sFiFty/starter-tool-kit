import * as React from 'react';

interface IScriptProps {
  children: any;
}

export const Script = ({ children }: IScriptProps) => (
  <script dangerouslySetInnerHTML={{__html: `(${children.toString()})();` }}></script>
);

