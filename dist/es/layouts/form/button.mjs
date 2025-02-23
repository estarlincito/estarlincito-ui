import * as Form from '@radix-ui/react-form';
import { Button as Button$1 } from '@radix-ui/themes';
import { jsx } from 'react/jsx-runtime';

const Button = ({
  disabled,
  label
}) => {
  return /* @__PURE__ */ jsx(Form.Submit, {
    asChild: true,
    children: /* @__PURE__ */ jsx(Button$1, {
      size: "4",
      variant: "soft",
      disabled,
      className: "--cursor-button",
      children: label
    })
  });
};

export { Button as default };
