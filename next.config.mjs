/** @type {import('next').NextConfig} */
const nextConfig = {
	output: process.env.NEXT_PUBLIC_CONFIG==='prod' ? 'export' : 'standalone',
	basePath: process.env.NEXT_PUBLIC_CONFIG==='prod' ? '/m2' : '',
	assetPrefix: process.env.NEXT_PUBLIC_CONFIG==='prod' ? '/m2' : '',
	images:{
		loader: "imgix",
		path: "/m2",
		unoptimized: true,
	},
	env: {
		BASEPATH: process.env.BASEPATH,
	}
};

export default nextConfig;
