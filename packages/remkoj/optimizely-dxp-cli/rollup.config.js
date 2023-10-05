/*const resolve = require('@rollup/plugin-node-resolve')
const json = require('@rollup/plugin-json')
const commonjs = require('@rollup/plugin-commonjs')
const terser = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel')*/

import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'

const intro =`#!/usr/bin/env node
/**
 * Frontend Utility providing helpers for common tasks when building a Vercel
 * hosted, Next.JS based website that uses Optimizely Content-Graph as content
 * repository
 * 
 * License: Apache 2
 * Copyright (c) 2023 - Remko Jantzen
 */`

export default {
    input: "dist/index.js",
    output: {
        dir: "bin/",
        intro,
        format: 'es'
    },
    plugins: [
        //babel({ babelHelpers: 'bundled' }),
        json({
            preferConst: true
        }),
        commonjs({
            extensions: ['.js','.cjs']
        }),
        /*resolve({
            preferBuiltins: true,
        }),*/
        //terser()
    ],
    external: [/^node\:[a-z]+$/]
}