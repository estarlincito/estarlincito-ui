'use strict';

require('../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.cjs');
const formZed = require('../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/form-zed.cjs');
const Form = require('@radix-ui/react-form');
const reactIcons = require('@radix-ui/react-icons');
const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const Form__namespace = /*#__PURE__*/_interopNamespaceDefault(Form);

const Field = props => {
  const {
    name,
    textarea,
    register,
    required
  } = props;
  const properties = formZed.formZed(name);
  const title = properties.title;
  const options = {
    ...register(name),
    ...properties,
    required: required ? true : false
  };
  return /* @__PURE__ */jsxRuntime.jsxs(Form__namespace.Field, {
    name,
    ...{
      className: "xrvj5dj xyorhqc"
    },
    children: [/* @__PURE__ */jsxRuntime.jsxs(themes.Box, {
      children: [/* @__PURE__ */jsxRuntime.jsx(Form__namespace.Label, {
        ...{
          className: "x1jvydc1 xk50ysn x1333yhw"
        },
        children: title
      }), /* @__PURE__ */jsxRuntime.jsx(Form__namespace.Message, {
        match: "valueMissing",
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        children: /* @__PURE__ */jsxRuntime.jsxs(themes.Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsxRuntime.jsx(reactIcons.InfoCircledIcon, {}), `Please enter your ${title.toLowerCase()}`]
        })
      }), /* @__PURE__ */jsxRuntime.jsx(Form__namespace.Message, {
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        match: "typeMismatch",
        children: /* @__PURE__ */jsxRuntime.jsxs(themes.Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsxRuntime.jsx(reactIcons.InfoCircledIcon, {}), `Please provide a valid ${title.toLowerCase()}`]
        })
      }), /* @__PURE__ */jsxRuntime.jsx(Form__namespace.Message, {
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        match: "tooLong",
        children: /* @__PURE__ */jsxRuntime.jsxs(themes.Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsxRuntime.jsx(reactIcons.InfoCircledIcon, {}), `Please provide a valid ${title.toLowerCase()}`]
        })
      }), /* @__PURE__ */jsxRuntime.jsx(Form__namespace.Message, {
        ...{
          className: "x1e2nbdu x4z9k3i x16ydxro x1us6l5c"
        },
        match: "tooShort",
        children: /* @__PURE__ */jsxRuntime.jsxs(themes.Flex, {
          align: "center",
          gapX: "1",
          children: [/* @__PURE__ */jsxRuntime.jsx(reactIcons.InfoCircledIcon, {}), `Please provide a valid ${title.toLowerCase()}`]
        })
      })]
    }), /* @__PURE__ */jsxRuntime.jsx(Form__namespace.Control, {
      asChild: true,
      children: textarea === true ? /* @__PURE__ */jsxRuntime.jsx(themes.TextArea, {
        ...options
      }) : /* @__PURE__ */jsxRuntime.jsx(themes.TextField.Root, {
        ...options
      })
    })]
  });
};

module.exports = Field;
