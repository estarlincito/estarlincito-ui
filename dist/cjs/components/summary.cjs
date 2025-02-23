'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

const Summary = ({
  summary
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Blockquote, {
    children: summary
  });
};

exports.Summary = Summary;
