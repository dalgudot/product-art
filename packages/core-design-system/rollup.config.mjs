import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
// import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

export default {
  input: './index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    // commonjs({
    //   include: 'node_modules/**',
    // }),
    babel({
      babelHelpers: 'runtime',
      presets: [
        '@babel/env',
        ['@babel/react', { runtime: 'automatic' }],
        '@babel/typescript',
      ],
      plugins: ['@babel/plugin-transform-runtime'],
      extensions,
    }),
    typescript(),
  ],
};
