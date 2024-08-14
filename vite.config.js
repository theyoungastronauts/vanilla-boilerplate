import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        // Customize the behavior as needed
        assetsInlineLimit: 4096, // Default 4 KB
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
});