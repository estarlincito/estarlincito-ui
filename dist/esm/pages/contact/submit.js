import { apiFetch as i } from "../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/api-fetch.js";
import "../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.js";
import { toast as s } from "../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.js";
const n = async (o) => {
  const r = await i({
    body: JSON.stringify(o),
    method: "POST",
    url: "https://estarlincito.com/api/mail"
  }), { message: t, success: a } = await r.json();
  if (!a) {
    s.error(t);
    return;
  }
  s.success(t);
};
export {
  n as default
};
