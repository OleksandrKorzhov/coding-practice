import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const _ = require('./internal.cjs');

export default _;
