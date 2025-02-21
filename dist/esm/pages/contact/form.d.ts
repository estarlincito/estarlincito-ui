import { default as React } from 'react';
export type InputContact = {
    'first-name': string;
    'last-name': string;
    company: string;
    'phone-number': string;
    email: string;
    message: string;
};
declare const ContactForm: () => React.JSX.Element;
export default ContactForm;
