import '@testing-library/react';
import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom';

expect.extend(matchers);

afterEach(() => {
   cleanup();
});
