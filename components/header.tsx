import React from 'react';
import Link from 'next/link';

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
				Projects
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
