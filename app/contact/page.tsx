import React from 'react';

export const metadata = {
	title: 'Knut Kirkhorn - Contact',
};

export default function Contact() {
	return (
		<div className="flex mt-32 gap-4 flex-col items-center justify-center">
			<h1 className="text-2xl font-bold">Send a mail to:</h1>
			<a
				className="text-blue-700 font-semibold hover:underline"
				href="mailto:knutkirk@hotmail.com"
			>
				knutkirk@hotmail.com
			</a>
		</div>
	);
}
