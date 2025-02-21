import { default as React } from 'react';
interface WrapperProps {
    children: React.ReactNode;
    align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
}
export declare const Wrapper: (props: WrapperProps) => React.JSX.Element;
export {};
