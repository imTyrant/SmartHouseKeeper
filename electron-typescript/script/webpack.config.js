const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const projectRoot = path.resolve(__dirname, "../");

const layout = "layout1"

module.exports = {
    
    mode: "development",

    // Specify compile code for electron renderer.
    target: "electron-renderer",

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "ui/[name].js"
    },

    entry: {
        index: `./src/renderer/${layout}/index.tsx`
    },


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    
    node: {
        __dirname: false,
        __filename: false
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader",
            },
            { 
                test: /\.less$/, 
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: { javascriptEnabled: true }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'babel-loader',
                  },
                  {
                    loader: '@svgr/webpack',
                    options: {
                      babel: false,
                      icon: true,
                    },
                  },
                ],
              }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new CopyWebpackPlugin([
            {from: `${projectRoot}/asset/${layout}/`, to:`${projectRoot}/dist/ui`}
        ])
    ]
};