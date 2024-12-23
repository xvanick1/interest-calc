/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Important for GitHub Pages
	assetPrefix: '/interest-calc/', // Set the asset prefix
	basePath: '/interest-calc', // Set the base path (optional)
	images: {
		unoptimized: true, // Often needed for GitHub Pages
	},
};

export default nextConfig;