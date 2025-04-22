
// src/setupTests.js

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Optionnel : configure des mocks globaux
vi.mock('some-dependency', () => ({
  someMethod: vi.fn(),
}));
