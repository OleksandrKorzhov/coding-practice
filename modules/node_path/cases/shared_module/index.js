import { createRequire } from 'module';
import cjs from './commonjs.cjs';
import es6 from './module.js';

const require = createRequire(import.meta.url);

import separate from './separate.cjs';
const separate_cjs = require('./separate.cjs');

separate.inc();
separate.inc();

separate_cjs.inc();

console.log(separate.getCounter());

console.log(separate_cjs.getCounter());

console.log(separate === separate_cjs);

console.log(cjs === es6);
