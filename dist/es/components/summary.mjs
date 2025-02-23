import { Blockquote } from '@radix-ui/themes';
import { jsx } from 'react/jsx-runtime';

const Summary = ({
  summary
}) => {
  return /* @__PURE__ */ jsx(Blockquote, {
    children: summary
  });
};

export { Summary };
