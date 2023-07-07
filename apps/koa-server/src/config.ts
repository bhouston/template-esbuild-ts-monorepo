import dotenv from 'dotenv';
import { createRequire } from 'module';

// load environment variables
dotenv.config();

export const PORT = Number.parseInt(process.env.PORT ?? '8080');
export const NODE_ENV = process.env.NODE_ENV ?? 'production';

const require = createRequire(import.meta.url);
const packageInfo = require('../package.json');
export const VERSION = packageInfo.version;
