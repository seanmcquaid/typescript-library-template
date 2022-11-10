import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: packageJson.name,
        preserveModules: true,
      },
      {
        dir: packageJson.module,
        format: 'esm',
        sourcemap: true,
        name: packageJson.name,
        preserveModules: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
