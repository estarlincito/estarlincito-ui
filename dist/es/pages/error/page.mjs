import { Container, Flex, Heading, Text, Button, Strong, Link, IconButton } from '@radix-ui/themes';
import { Wrapper } from '../../layouts/wrapper.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';

const ErrorPage = ({
  error,
  reset
}) => {
  return /* @__PURE__ */ jsx(Container, {
    size: "1",
    children: /* @__PURE__ */ jsx(Wrapper, {
      align: "center",
      children: /* @__PURE__ */ jsxs(Flex, {
        direction: "column",
        gap: "2",
        children: [/* @__PURE__ */ jsx(Heading, {
          size: "9",
          mb: "2",
          children: "Oops!"
        }), /* @__PURE__ */ jsx(Heading, {
          size: "5",
          children: error.message
        }), /* @__PURE__ */ jsx(Text, {
          children: "Please try again or if the problem persists, feel free to contact support for assistance. We apologize for the inconvenience."
        }), /* @__PURE__ */ jsxs(Flex, {
          justify: "between",
          width: "9.375rem",
          mt: "2",
          children: [/* @__PURE__ */ jsx(Button, {
            variant: "ghost",
            onClick: reset,
            size: "3",
            className: "--cursor-button",
            children: /* @__PURE__ */ jsx(Strong, {
              children: "Try again"
            })
          }), /* @__PURE__ */ jsx(Link, {
            target: "_self",
            href: "/contact",
            children: /* @__PURE__ */ jsx(IconButton, {
              variant: "ghost",
              children: /* @__PURE__ */ jsx(Strong, {
                children: "Contact"
              })
            })
          })]
        })]
      })
    })
  });
};

export { ErrorPage };
