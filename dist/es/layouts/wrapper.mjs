import { Flex } from '@radix-ui/themes';
import { jsx } from 'react/jsx-runtime';

const Wrapper = (props) => {
  return /* @__PURE__ */ jsx(Flex, {
    direction: "column",
    gap: "5",
    p: "5",
    align: props.align,
    justify: "center",
    minHeight: "90vh",
    children: props.children
  });
};

export { Wrapper };
