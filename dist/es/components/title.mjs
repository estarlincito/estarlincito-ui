import { Heading } from '@radix-ui/themes';
import { jsx } from 'react/jsx-runtime';

const Title = (props) => {
  return /* @__PURE__ */ jsx(Heading, {
    ...props,
    size: props.size ? props.size : {
      initial: "6",
      lg: "8"
    },
    children: props.children
  });
};

export { Title };
