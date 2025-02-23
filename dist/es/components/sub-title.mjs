import { Heading } from '@radix-ui/themes';
import { jsx } from 'react/jsx-runtime';

const SubTitle = (props) => {
  return /* @__PURE__ */ jsx(Heading, {
    weight: props.weight ? props.weight : "light",
    ...props,
    size: props.size ? props.size : {
      initial: "4",
      lg: "6"
    }
  });
};

export { SubTitle };
