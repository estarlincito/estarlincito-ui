import "../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.js";
import { GenerateMetadata as a } from "../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/metadata.js";
import { ObjectUtils as t } from "../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/object.js";
const e = t.create({
  description: "Seeks collaboration on building something impactful and sustainable!",
  path: "/contact",
  title: "Contact"
}), { description: o, title: i, path: n } = e, s = a.website({
  description: o,
  images: [
    {
      alt: "",
      url: ""
    }
  ],
  locale: "",
  siteName: "",
  title: i,
  url: `url${n}`
}), m = t.freeze({ ...e, metadata: s });
export {
  m as default
};
