import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './src/setupTests.js', // Assure-toi que ce fichier est bien dans src/
    globals: true, // Par exemple, pour activer les variables globales pour les tests
  },
});
