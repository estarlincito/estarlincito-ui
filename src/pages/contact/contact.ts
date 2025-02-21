import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
//import { locale, siteName, url } from 'settings';

const constants = ObjectUtils.create({
  description:
    'Seeks collaboration on building something impactful and sustainable!',
  path: '/contact',
  title: 'Contact',
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale: '',
  siteName: '',
  title,
  url: `${'url'}${path}`,
});

const CONTACT = ObjectUtils.freeze({ ...constants, metadata });
export default CONTACT;
