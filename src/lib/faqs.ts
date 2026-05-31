export type faq = {
	question: string;
	answer: string;
};

export const FAQS: faq[] = [
	{
		question: 'Is llama.cpp really free?',
		answer: 'Yes. The program is licensed under the MIT license and is free and open-source.'
	},
	{
		question: 'How can I contribute?',
		answer:
			'You can help by creating useful pull requests, finding issues and bugs, and discussing with the community about improvments on our Github.'
	},
	{
		question: 'Why is llama.cpp slower when I use the package provided my Linux distribution?',
		answer:
			'Package managers usually provide the latest stable release, which may not have the latest performance improvments. For maximum performance, consider compiling from source. Also remember that most distribution packages are not maintained directly by us.'
	},
	{
		question: 'Why is Model X not performing as well as public results with the same hardware?',
		answer:
			'There are many factors to model speed. Compiling the binaries for your hardware can result in performance improvments over precompiled ones. Fine-tuning the parameters available also makes a big difference. The most important ones are the number of layers on the GPU for dense models and the number of expert layers offloaded to CPU for MoE models.'
	}
];
