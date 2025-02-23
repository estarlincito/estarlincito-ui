import * as Form$1 from '@radix-ui/react-form';
import { Flex } from '@radix-ui/themes';
import Button from './button.mjs';
import Field from './field/index.mjs';
import { jsx } from 'react/jsx-runtime';

const Form = ({
  children,
  action,
  onSubmit,
  height
}) => {
  return /* @__PURE__ */ jsx(Flex, {
    height,
    asChild: true,
    direction: "column",
    p: "5",
    gapY: "1",
    justify: "center",
    width: {
      initial: "400px",
      md: "600px"
    },
    style: {
      backgroundColor: "var(--gray-1)",
      border: "1px solid var(--gray-5)",
      borderRadius: "0.625rem"
    },
    children: /* @__PURE__ */ jsx(Form$1.Root, {
      action,
      onSubmit,
      children
    })
  });
};
Form.Button = Button;
Form.Field = Field;

export { Form };
