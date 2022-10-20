module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,jpg,PNG,png,jpeg,mp4,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};