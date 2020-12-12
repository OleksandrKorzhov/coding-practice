import { createRequire } from 'module';

const require = createRequire(import.meta.url);

import '#internal_dependency';
const _ = require('#internal_dependency');
