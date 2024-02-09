import React from 'react';
import Link from 'next/link';
import {ExternalLinkIcon} from 'lucide-react';

export default function Header() {
	return (
		<nav className="hidden md:flex gap-8 right-0 justify-center">
			<Link
				className="text-lg font-medium text-slate-800 hover:text-black transition duration-100 ease-in-out"
				href="/"
			>
				Home
			</Link>
			<Link
				className="text-lg font-medium text-slate-800 hover:text-black transition duration-100 ease-in-out"
				// href="/projects" - TODO: make it into own page
				href="https://github.com/knutkirkhorn"
				rel="noopener noreferrer"
				target="_blank"
			>
				<span className="flex flec-col items-center gap-2">
					Projects
					<ExternalLinkIcon className="w-4 h-4" />
				</span>
			</Link>
			<Link
				className="text-lg font-medium text-slate-800 hover:text-black transition duration-100 ease-in-out"
				href="/contact"
			>
				Contact
			</Link>
		</nav>
	);
}
