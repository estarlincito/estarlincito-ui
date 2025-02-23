'use strict';

const Form = require('@radix-ui/react-form');
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

const Button = ({
  disabled,
  label
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Form__namespace.Submit, {
    asChild: true,
    children: /* @__PURE__ */ jsxRuntime.jsx(themes.Button, {
      size: "4",
      variant: "soft",
      disabled,
      className: "--cursor-button",
      children: label
    })
  });
};

module.exports = Button;
