import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remplace 'NOM_DU_REPO' par le nom exact de ton dépôt GitHub (ex: '/ebrahim/' ou '/P-Ebrahim/')
  base: '/P_Ebrahim/', 
})