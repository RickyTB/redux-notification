import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';


export default {
    input: './src/index.js',
    moduleName: 'ReduxNotification',
    sourcemap: true,
    targets: [
        {
            dest: './build/redux-notification.js',
            format: 'umd'
        },
        {
            dest: 'build/redux-notification.module.js',
            format: 'es'
        }
    ],

    plugins: [
        postcss({
            modules: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        resolve(),
        commonjs()
    ],

    external: ['react', 'react-dom', 'redux', 'react-redux'],

    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'react-redux': 'ReactRedux'
    }
};