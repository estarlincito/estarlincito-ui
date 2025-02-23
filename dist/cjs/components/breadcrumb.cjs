'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

const Breadcrumb = ({
  slug,
  color
}) => {
  const pathname = "";
  const [firstSlug, secondSlug, thirdSlug] = slug;
  return /* @__PURE__ */jsxRuntime.jsxs(themes.Flex, {
    align: "center",
    gap: "1",
    children: [/* @__PURE__ */jsxRuntime.jsx(themes.Link, {
      size: "2",
      href: "/",
      target: "_self",
      children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
        children: "Home"
      })
    }), /* @__PURE__ */jsxRuntime.jsx(themes.Text, {
      color: color ? color : "indigo",
      size: "2",
      as: "span",
      children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
        children: "/"
      })
    }), /* @__PURE__ */jsxRuntime.jsx(themes.Link, {
      size: "2",
      href: firstSlug.route,
      target: "_self",
      underline: pathname === firstSlug.route ? "always" : "hover",
      children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
        children: firstSlug.title
      })
    }), secondSlug && /* @__PURE__ */jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/* @__PURE__ */jsxRuntime.jsx(themes.Text, {
        color: color ? color : "indigo",
        size: "2",
        as: "span",
        children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
          children: "/"
        })
      }), /* @__PURE__ */jsxRuntime.jsx(themes.Link, {
        size: "2",
        href: secondSlug.route,
        target: "_self",
        children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
          children: secondSlug.title
        })
      })]
    }), thirdSlug && /* @__PURE__ */jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/* @__PURE__ */jsxRuntime.jsx(themes.Text, {
        color: color ? color : "indigo",
        size: "2",
        as: "span",
        children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
          children: "/"
        })
      }), /* @__PURE__ */jsxRuntime.jsx(themes.Box, {
        asChild: true,
        maxWidth: {
          initial: "5.625rem",
          md: "12.5rem"
        },
        overflow: "hidden",
        ...{
          className: "xlyipyv xuxw1ft"
        },
        children: /* @__PURE__ */jsxRuntime.jsx(themes.Link, {
          size: "2",
          href: thirdSlug.route,
          target: "_self",
          children: /* @__PURE__ */jsxRuntime.jsx(themes.Strong, {
            children: thirdSlug.title
          })
        })
      })]
    })]
  });
};

exports.Breadcrumb = Breadcrumb;
