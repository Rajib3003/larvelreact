import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { ViteSitemap } from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/frontendReact',
  base: '/',
  
})
