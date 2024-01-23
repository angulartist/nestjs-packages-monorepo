// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
import { getBaseJestConfig } from '../../jest-base.config';
import type { Config } from 'jest';

const rootDir = path.resolve(__dirname);
const baseConfig = getBaseJestConfig(rootDir);

const jestConfig: Config = {
  ...baseConfig,

  collectCoverageFrom: [...baseConfig.collectCoverageFrom!],
  setupFiles: ['<rootDir>/jest-setup.ts'],
};

export default jestConfig;
