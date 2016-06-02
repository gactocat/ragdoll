module.exports = {
    entry: {
        jsx: "./src/index.jsx",
        html: "./src/index.html",
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"}
        ],
        loaders: [
            { test: /\.html$/, loader: "file?name=[name].[ext]" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
