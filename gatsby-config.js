const config = {
	siteMetadata: {
		title: `Simon Mayerhofer`,
		author: `Simon Mayerhofer`,
		description: `Simon is a web-developer and co-founder of MEDIADUDES, an agency based in Freiburg, Germany.`,
		siteUrl: `https://www.mayerhofer.it/`,
		social: {
			github: 'SimonMayerhofer',
			codepen: 'maysi',
			stackoverflow: '2180161',
			facebook: 'mayerhofersimon',
			twitter: `SimonMayerhofer`,
			linkedin: 'simonmayerhofer',
			xing: 'Simon_Mayerhofer5',
		},
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop', 'build-javascript'],
				options: {
					emitWarning: true,
					failOnError: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-stylelint',
			options: {
				files: ['**/*.{scss,sass,css}'],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Simon Mayerhofer's Blog`,
				short_name: `Simon's Blog`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `minimal-ui`,
				icon: `src/assets/logo-icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
	],
};

// only add analytics if site is published with netlify.
if (process.env.CONTEXT === 'production') {
	const googleAnalyticsCfg = {
		resolve: `gatsby-plugin-google-analytics`,
		options: {
			trackingId: 'UA-143997142-1',
			// Defines where to place the tracking script - `true` in the head and `false` in the body
			head: true,
			anonymize: true,
			respectDNT: true,
		},
	};

	config.plugins.push(googleAnalyticsCfg);
}

module.exports = config;
