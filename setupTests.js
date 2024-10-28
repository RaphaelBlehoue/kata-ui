import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { afterEach, expect, vi } from 'vitest';
import { setJestCucumberConfiguration } from 'jest-cucumber';


expect.extend(matchers);

setJestCucumberConfiguration({
  loadRelativePath: true
});

afterEach(() => {
  cleanup();
});