import { Flex, Link, Strong, Text, Box } from '@radix-ui/themes';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

const Breadcrumb = ({
  slug,
  color
}) => {
  const pathname = "";
  const [firstSlug, secondSlug, thirdSlug] = slug;
  return /* @__PURE__ */jsxs(Flex, {
    align: "center",
    gap: "1",
    children: [/* @__PURE__ */jsx(Link, {
      size: "2",
      href: "/",
      target: "_self",
      children: /* @__PURE__ */jsx(Strong, {
        children: "Home"
      })
    }), /* @__PURE__ */jsx(Text, {
      color: color ? color : "indigo",
      size: "2",
      as: "span",
      children: /* @__PURE__ */jsx(Strong, {
        children: "/"
      })
    }), /* @__PURE__ */jsx(Link, {
      size: "2",
      href: firstSlug.route,
      target: "_self",
      underline: pathname === firstSlug.route ? "always" : "hover",
      children: /* @__PURE__ */jsx(Strong, {
        children: firstSlug.title
      })
    }), secondSlug && /* @__PURE__ */jsxs(Fragment, {
      children: [/* @__PURE__ */jsx(Text, {
        color: color ? color : "indigo",
        size: "2",
        as: "span",
        children: /* @__PURE__ */jsx(Strong, {
          children: "/"
        })
      }), /* @__PURE__ */jsx(Link, {
        size: "2",
        href: secondSlug.route,
        target: "_self",
        children: /* @__PURE__ */jsx(Strong, {
          children: secondSlug.title
        })
      })]
    }), thirdSlug && /* @__PURE__ */jsxs(Fragment, {
      children: [/* @__PURE__ */jsx(Text, {
        color: color ? color : "indigo",
        size: "2",
        as: "span",
        children: /* @__PURE__ */jsx(Strong, {
          children: "/"
        })
      }), /* @__PURE__ */jsx(Box, {
        asChild: true,
        maxWidth: {
          initial: "5.625rem",
          md: "12.5rem"
        },
        overflow: "hidden",
        ...{
          className: "xlyipyv xuxw1ft"
        },
        children: /* @__PURE__ */jsx(Link, {
          size: "2",
          href: thirdSlug.route,
          target: "_self",
          children: /* @__PURE__ */jsx(Strong, {
            children: thirdSlug.title
          })
        })
      })]
    })]
  });
};

export { Breadcrumb };
