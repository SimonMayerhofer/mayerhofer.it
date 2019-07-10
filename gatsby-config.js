module.exports = {
	siteMetadata: {
		title: `Simon Mayerhofer`,
		author: `Simon Mayerhofer`,
		description: `Simon is a web-developer and co-founder of MEDIADUDES, an agency based in Freiburg, Germany.`,
		siteUrl: `https://dev.mayerhofer.it/`,
		social: {
			twitter: `SimonMayerhofer`,
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
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Simon Mayerhofer Blog`,
				short_name: `Simons Blog`,
				start_url: `/`,
				background_color: `#141414`,
				theme_color: `#000000`,
				display: `minimal-ui`,
				icon: `src/assets/logo-icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
	],
};
