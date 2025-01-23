import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import tsConfig from './tsconfig.json' with { type: "json" };
import typescriptSdk from "typescript"

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'module',
    sourcemap: true
  },
  treeshake: "smallest",
  plugins: [
    typescript({
      include: "{,**/}*.(cts|mts|ts|tsx|js|jsx)",
      exclude: "src/**/*.json",
      outputToFilesystem: true,
      compilerOptions: tsConfig.compilerOptions,
      typescript: typescriptSdk
    }), 
    json({ 
      include: "src/**/*.json" 
    })
  ]
};