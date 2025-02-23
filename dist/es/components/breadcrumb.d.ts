type Color = ('gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky') | undefined;
type Slug = [
    {
        title: string;
        route: string;
    },
    ...{
        title: string;
        route: string;
    }[]
];
interface Props {
    slug: Slug;
    color?: Color;
}
export declare const Breadcrumb: ({ slug, color }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
