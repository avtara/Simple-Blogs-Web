module.exports = {
	siteMetadata: {
		title: 'Personal Web Avtara',
		author: 'Muhammad Avtara Khrisna',
		imageUrl: '',
		description: 'Personal Web Avtara Khrisna',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, HTML5, Seo, Android,`,
		twitter: 'https://twitter.com/avtarakhrisna',
		github: `https://github.com/avtara`,
		medium: 'https://medium.com/@avtarakhrisna1',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://avtara.herokuapp.com/`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
			  shortname: `avtara`
			}
		  },
		{
			resolve: "gatsby-source-apiserver",
			options: {
			  typePrefix: "internal__",
			  url: `http://localhost:8080/api/v1/blogs/`,
			  method: "get",
			  headers: {
				"Content-Type": "application/json"
			  },
			  name: `blogs`,
			  entityLevel: `data`
			}
		  },
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/logo.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: 'xxxxxxx',
		// 		// Setting this parameter is optional (requried for some countries such as Germany)
		// 		anonymize: true
		// 	}
		// },
		`gatsby-plugin-sitemap`
	]
};
