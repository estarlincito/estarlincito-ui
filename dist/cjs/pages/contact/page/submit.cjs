'use strict';

const apiFetch = require('../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/api-fetch.cjs');
require('../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.cjs');
const index = require('../../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.cjs');

const onSubmit = async (data) => {
  const res = await apiFetch.apiFetch({
    body: JSON.stringify(data),
    method: "POST",
    url: "https://estarlincito.com/api/mail"
  });
  const {
    message,
    success
  } = await res.json();
  if (!success) {
    index.toast.error(message);
    return;
  }
  index.toast.success(message);
};

module.exports = onSubmit;
