import { createRequire } from 'module';
import 'data:text/javascript, console.log(\'+\');';

const require = createRequire(import.meta.url);

require('data:text/javascript, console.log("++");'); // doesn't work!
