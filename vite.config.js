import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ - Usamos una función para configurar condicionalmente
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Configuración para desarrollo (npm run dev)
    return {
      plugins: [react()],
    }
  } else {
    // Configuración para producción (npm run build)
    return {
      base: '/resormat-web/',
      plugins: [react()],
    }
  }
})
