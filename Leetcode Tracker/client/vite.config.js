import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "ec2-16-171-177-8.eu-north-1.compute.amazonaws.com",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
