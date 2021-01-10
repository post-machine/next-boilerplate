import GlobalStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}