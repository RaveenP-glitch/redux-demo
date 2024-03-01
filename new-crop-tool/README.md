# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## About
A demo project to visualize the use of 'react-easy-crop' library to build an Image cropper to support image upload feature.

## prerequisites
VITE v5.1.3 
react- ^18.2.0
nvm - any...
node - v20.9.0 or above
npm - v10.2.4

## Image cropper library
https://www.npmjs.com/package/react-easy-crop?activeTab=readme

## Running Storybook
npm install
npm run dev

## Port
dev server - http://localhost:8080/
to change port - edit the vite.config.js

`export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  }
})`