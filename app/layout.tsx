import './globals.css';

import React from 'react';
import type {Metadata, Viewport} from 'next';
import {Inter} from 'next/font/google';
import {Analytics} from '@vercel/analytics/react';

import {cn} from '@/lib/utils';
import Header from '@/components/header';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Knut Kirkhorn',
	description: "Knut Kirkhorn's personal website",
};

export const viewport: Viewport = {
	themeColor: [
		{media: '(prefers-color-scheme: light)', color: 'white'},
		{media: '(prefers-color-scheme: dark)', color: 'black'},
	],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body
				className={cn(
					inter.className,
					'flex min-h-screen flex-col p-8 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black',
				)}
			>
				{/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
				<Header />
				{children}
				{/* </ThemeProvider> */}
				<Analytics />
			</body>
		</html>
	);
}
