'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

require('../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.cjs');
const metadata = require('../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/metadata.cjs');

const errorMeta = ({
  locale,
  siteName,
  url
}) => {
  return metadata.GenerateMetadata.website({
    description: "...We apologize for the inconvenience.",
    images: [{
      alt: "Page not found cover",
      url: "https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png"
    }],
    locale,
    siteName,
    title: "Oops!",
    url: `${url}`
  });
};

exports.errorMeta = errorMeta;
