export const plugins = [
  [
    '@babel/transform-react-jsx',
    {
      importSource: 'react',
      runtime: 'automatic',
    },
  ],
];
export const presets = ['@babel/preset-react', '@babel/preset-typescript'];
