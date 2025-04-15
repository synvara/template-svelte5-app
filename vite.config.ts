import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { codecovVitePlugin } from '@codecov/vite-plugin';

export default defineConfig({
	plugins: [
		sveltekit(), // Put the Codecov vite plugin after all other plugins
		codecovVitePlugin({
			enableBundleAnalysis: true,
			bundleName: 'template-svelte5-app'
		})
	],
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './coverage'
		},
		// Add JUnit reporter
		reporters: ['default', 'junit'],
		outputFile: 'test-report.junit.xml',
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
