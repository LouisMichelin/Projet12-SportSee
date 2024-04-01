import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import renderer from "vite-plugin-electron-renderer";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), renderer()],
});

// --------------- ORIGINAL VITE CONFIG -------------------
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// --------------------------------------------------------
