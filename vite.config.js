import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ECommerceFoodApp/', // replace with your repository name
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: '/',
//   }

//   if (command !== 'serve') {
//     config.base = '/ECommerceFoodApp/'
//   }

//   return config
// })