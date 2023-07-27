/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: 'rgb(var(--text)  / <alpha-value>)',
				background: 'rgb(var(--background)  / <alpha-value>)',
				primary: 'rgb(var(--primary)  / <alpha-value>)'
			},
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans-serif'],
				'space-grotesk': ['"Space Grotesk"', 'sans-serif']
			}
		}
	},
	plugins: []
};
