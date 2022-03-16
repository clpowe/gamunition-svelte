import plugin from 'windicss/plugin';

export default {
	theme: {
		colors: {
			yellow: '#FFEB3B',
			oragne: '#FBC02D',
			'gun-black': '#212121',
			'light-grey': '#757575',
			light: '#FEFEFE'
		},
		fontSize: {
			xs: ['.5rem'],
			sm: ['.707rem'],
			body: ['1rem'],
			lg: ['1.414rem'],
			xl: ['1.999rem'],
			'2xl': ['2.827rem'],
			'3xl': ['3.998rem'],
			'4xl': ['5.653rem']
		},
		fontFamily: {
			oswald: "'Oswald', sans-serif",
			lato: "'Lato', sans-serif"
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			const newUtilities = {
				'.mycontainer': {
					width: 'min(100% - 2rem, 75rem)',
					'margin-inline': 'auto'
				}
			};
			addUtilities(newUtilities);
		}),
		require('windicss/plugin/typography'),
		require('windicss/plugin/forms')
	]
};
