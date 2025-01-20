const images = {};

const importAll = (requireContext) => {
  requireContext.keys().forEach((key) => {
    const fileName = key.replace('./', '').split('.')[0];
    images[fileName] = requireContext(key);
  });
};

importAll(require.context('../images/insurances', false, /\.(png|jpe?g|webp)$/));

export default images;
