module.exports = {
    devtool: "#inline-source-map",
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            {test: /\.js?$/, exclude: /node_modules/, loader: '6to5-loader?experimental&optional=selfContained'}
        ]
    }
};
