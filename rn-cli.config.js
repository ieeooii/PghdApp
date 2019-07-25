/* eslint-disable comma-dangle */
module.exports = {
  getTransformModulePath() {
    // eslint-disable-next-line quotes
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    // eslint-disable-next-line quotes
    return ["ts", "tsx", "js", "jsx"];
  }
};
