import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import tsConfig from './tsconfig.json' with { type: "json" };
import typescriptSdk from "typescript"
import { importAsString } from 'rollup-plugin-string-import';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'module',
    sourcemap: true
  },
  treeshake: "smallest",
  plugins: [
    // Import handlebars template for generating TypeScript files, replace template vars with a 
    // specific handlebars instruction to evaluate them when rollup merges them into the bundle.
    importAsString({
      include: ["{,**/}*.handlebars"],
      transform( content ) {
        return content.replaceAll(/(?<!\\)\${\s*?(.+?)\s*?(?<!\\)}/g,'{{strtpl "$1"}}')
      }
    }),

    // Support typescript compilation by Rollup
    typescript({
      include: "{,**/}*.(d.ts|cts|mts|ts|tsx|js|jsx)",
      exclude: "{,**/}*.(json|handlebars)",
      outputToFilesystem: true,
      compilerOptions: tsConfig.compilerOptions,
      typescript: typescriptSdk
    }),

    // Import JSON
    json({ 
      include: "src/**/*.json"
    })
  ]
};