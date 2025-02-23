'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const Form$1 = require('@radix-ui/react-form');
const themes = require('@radix-ui/themes');
const layouts_form_button = require('./button.cjs');
const layouts_form_field_index = require('./field/index.cjs');
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

const Form__namespace = /*#__PURE__*/_interopNamespaceDefault(Form$1);

const Form = ({
  children,
  action,
  onSubmit,
  height
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Flex, {
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
    children: /* @__PURE__ */ jsxRuntime.jsx(Form__namespace.Root, {
      action,
      onSubmit,
      children
    })
  });
};
Form.Button = layouts_form_button;
Form.Field = layouts_form_field_index;

exports.Form = Form;
