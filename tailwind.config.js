const px = (pixels) => pixels / 16 + 'rem';

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			xs: px(12),
			sm: px(14),
			base: px(15),
			lg: px(18),
			xl: px(20),
			'2xl': px(24),
			'3xl': px(30),
			'4xl': px(36),
			'5xl': px(48),
			'6xl': px(64),
		},
		extend: {
			screens: { xs: '480px' },
		},
	},
	variants: {
		scrollbar: ['rounded'],
		extend: {},
	},
	plugins: [require('tailwind-scrollbar')],
};
