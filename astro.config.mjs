// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bferg314.github.io',
	base: '/hallucinations',
	integrations: [
		starlight({
			title: 'Hallucinations',
			description:
				'AI-generated writing, commissioned and curated by Bryan Ferguson.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/bferg314/hallucinations',
				},
			],
			customCss: ['./src/styles/theme.css'],
			lastUpdated: true,
			sidebar: [
				{ label: 'Why "Hallucinations"?', slug: 'why-hallucinations' },
				{ label: 'Fiction', items: [{ autogenerate: { directory: 'fiction' } }] },
				{ label: 'Ideas', items: [{ autogenerate: { directory: 'ideas' } }] },
				{
					label: 'Philosophy',
					items: [{ autogenerate: { directory: 'philosophy' } }],
				},
				{ label: 'Reality', items: [{ autogenerate: { directory: 'reality' } }] },
				{
					label: 'Research',
					items: [{ autogenerate: { directory: 'research' } }],
				},
			],
		}),
	],
});
