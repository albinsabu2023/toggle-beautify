const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "YourComponent",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  mode: "production", // Add this line to explicitly set production mode
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
