/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// NOTE: unable to use these when using the --turbopack flag
		// typedRoutes: true,
		// ppr: true,
	},
	eslint: {
		dirs: ['app', 'components', 'lib'],
	},
};

module.exports = nextConfig;
