var path= require('path');
console.log(path.join(__dirname, 'public'));
module.exports={
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        }]
    },
    devtool:'cheap-module-eval-source-map',
    mode: 'development',
    devServer:{
        contentBase:path.join(__dirname, 'public')
    }
}