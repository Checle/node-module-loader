import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.js',
  dest: 'dist/index.js',
  format: 'cjs',

  plugins: [
    nodeResolve(),

    babel({
      runtimeHelpers: true,
      plugins: ['transform-runtime', 'transform-class-properties'],
      presets: ['es2017', 'es2016'],
      include: 'src/**',
    }),

    commonjs(),
    nodeGlobals(),
  ],
}
