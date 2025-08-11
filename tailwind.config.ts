import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New brand palette based on the provided styles
				brand: {
					black: 'hsl(var(--brand-black))',
					white: 'hsl(var(--brand-white))',
					grayMedium: 'hsl(var(--brand-gray-medium))',
					green500: 'hsl(var(--brand-green-500))',
					green600: 'hsl(var(--brand-green-600))',
					blue600: 'hsl(var(--brand-blue-600))',
					lovableBlue: 'hsl(var(--brand-lovable-blue))',
					lovableMagenta: 'hsl(var(--brand-lovable-magenta))',
					lovableRed: 'hsl(var(--brand-lovable-red))',
					lovableOrange: 'hsl(var(--brand-lovable-orange))',
					cream: 'hsl(var(--brand-cream))',
					chatUser: 'hsl(var(--chat-user))',
					chatBot: 'hsl(var(--chat-bot))',
					gray50: 'hsl(var(--gray-50))',
					gray100: 'hsl(var(--gray-100))',
					gray500: 'hsl(var(--gray-500))',
					gray600: 'hsl(var(--gray-600))',
					gray700: 'hsl(var(--gray-700))',
					gray800: 'hsl(var(--gray-800))',
					blueHover: 'hsl(var(--blue-hover))'
			},
			fontFamily: {
				sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
