import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: 
  // - If repo is 'username.github.io', base should be '/'
  // - Otherwise, base should be '/repo-name/'
  base: process.env.GITHUB_REPOSITORY 
    ? (() => {
        const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
        return repoName.includes('.github.io') ? '/' : `/${repoName}/`
      })()
    : '/',
})
