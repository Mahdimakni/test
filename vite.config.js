import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './src/setupTests.js', // Assure-toi que le fichier existe
    globals: true, // Optionnel selon tes préférences
  },
});
