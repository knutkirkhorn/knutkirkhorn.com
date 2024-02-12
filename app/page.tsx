import React from 'react';
import {Github, Linkedin} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';

function LinkButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Button
			asChild
			variant="secondary"
			className="shadow-md hover:bg-slate-200"
		>
			<a href={href} rel="noopener noreferrer" target="_blank">
				{children}
			</a>
		</Button>
	);
}

export default function Home() {
	return (
		<main className="flex mt-32 flex-col items-center justify-center">
			<h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
				Knut Kirkhorn
			</h1>
			<p className="text-lg font-medium text-muted-foreground mt-8">
				👋 Welcome to my page
			</p>
			<div className="flex mt-16 gap-4">
				<LinkButton href="https://github.com/knutkirkhorn">
					<Github className="h-4 w-4" />
				</LinkButton>
				<LinkButton href="https://twitter.com/knutkirkhorn">
					<Icons.Twitter className="h-4 w-4 fill-current" />
				</LinkButton>
				<LinkButton href="https://www.linkedin.com/in/knut-aasgaard-kirkhorn/">
					<Linkedin className="h-4 w-4" />
				</LinkButton>
			</div>
		</main>
	);
}
