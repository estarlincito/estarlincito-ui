'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

require('../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.cjs');
const metadata = require('../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/metadata.cjs');

const contactMeta = ({
  locale,
  siteName,
  url
}) => {
  return metadata.GenerateMetadata.website({
    description: "Seeks collaboration on building something impactful and sustainable!",
    images: [{
      alt: "",
      url: ""
    }],
    locale,
    siteName,
    title: "Contact",
    url: `${url}/contact`
  });
};

exports.contactMeta = contactMeta;
