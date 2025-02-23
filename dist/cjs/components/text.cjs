'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

const Text = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Text, {
    ...props
  });
};

exports.Text = Text;
