import { apiFetch } from '../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/api-fetch.mjs';
import '../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.mjs';
import { toast as c } from '../../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs';

const onSubmit = async (data) => {
  const res = await apiFetch({
    body: JSON.stringify(data),
    method: "POST",
    url: "https://estarlincito.com/api/mail"
  });
  const {
    message,
    success
  } = await res.json();
  if (!success) {
    c.error(message);
    return;
  }
  c.success(message);
};

export { onSubmit as default };
