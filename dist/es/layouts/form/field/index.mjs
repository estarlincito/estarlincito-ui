import '../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.mjs';
import { formZed } from '../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/form-zed.mjs';
import * as Form from '@radix-ui/react-form';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Flex, TextArea, TextField } from '@radix-ui/themes';
import { jsxs, jsx } from 'react/jsx-runtime';

const Field = props => {
  const {
    name,
    textarea,
    register,
    required
  } = props;
  const properties = formZed(name);
  const title = properties.title;
  const options = {
    ...register(name),
    ...properties,
    required: required ? true : false
  };
  return /* @__PURE__ */jsxs(Form.Field, {
    name,
    ...{
      className: "xrvj5dj xyorhqc"
    },
    children: [/* @__PURE__ */jsxs(Box, {
      children: [/* @__PURE__ */jsx(Form.Label, {
        ...{
          className: "x1jvydc1 xk50ysn x1333yhw"
        },
        children: title
      }), /* @__PURE__ */jsx(Form.Message, {
        match: "valueMissing",
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        children: /* @__PURE__ */jsxs(Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsx(InfoCircledIcon, {}), `Please enter your ${title.toLowerCase()}`]
        })
      }), /* @__PURE__ */jsx(Form.Message, {
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        match: "typeMismatch",
        children: /* @__PURE__ */jsxs(Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsx(InfoCircledIcon, {}), `Please provide a valid ${title.toLowerCase()}`]
        })
      }), /* @__PURE__ */jsx(Form.Message, {
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        match: "tooLong",
        children: /* @__PURE__ */jsxs(Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsx(InfoCircledIcon, {}), `Please provide a valid ${title.toLowerCase()}`]
        })
      }), /* @__PURE__ */jsx(Form.Message, {
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        match: "tooShort",
        children: /* @__PURE__ */jsxs(Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsx(InfoCircledIcon, {}), `Please provide a valid ${title.toLowerCase()}`]
        })
      })]
    }), /* @__PURE__ */jsx(Form.Control, {
      asChild: true,
      children: textarea === true ? /* @__PURE__ */jsx(TextArea, {
        ...options
      }) : /* @__PURE__ */jsx(TextField.Root, {
        ...options
      })
    })]
  });
};

export { Field as default };
