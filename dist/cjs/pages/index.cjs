'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const pages_error_metadata = require('./error/metadata.cjs');
const pages_error_page = require('./error/page.cjs');
const pages_contact_metadata = require('./contact/metadata.cjs');
const pages_contact_page_index = require('./contact/page/index.cjs');
const pages_notFound_metadata = require('./not-found/metadata.cjs');
const pages_notFound_page = require('./not-found/page.cjs');



exports.errorMeta = pages_error_metadata.errorMeta;
exports.ErrorPage = pages_error_page.ErrorPage;
exports.contactMeta = pages_contact_metadata.contactMeta;
exports.ContactPage = pages_contact_page_index.ContactPage;
exports.notFoundMeta = pages_notFound_metadata.notFoundMeta;
exports.NotFoundPage = pages_notFound_page.NotFoundPage;
