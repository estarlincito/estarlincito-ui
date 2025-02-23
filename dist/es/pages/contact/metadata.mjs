import '../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.mjs';
import { GenerateMetadata } from '../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/metadata.mjs';

const contactMeta = ({
  locale,
  siteName,
  url
}) => {
  return GenerateMetadata.website({
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

export { contactMeta };
