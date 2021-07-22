import 'tailwindcss/tailwind.css';
import NextNprogress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<NextNprogress
				color='#29D'
				startPosition={0.3}
				stopDelayMs={200}
				height={2}
				showOnShallow={true}
				options={{ showSpinner: false }}
			/>

			<div className='flex flex-col items-center justify-center h-screen mx-auto text-base text-gray-900 bg-cool-gray-200 xs:py-8 bg-red-300'>
				<div className='flex flex-col w-full overflow-hidden bg-white shadow rounded-lg xs:max-w-sm xs:h-[800px]'>
					<Header title={headerTitles[router.pathname] || '404'} />

					<main className='flex-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300'>
						<Component {...pageProps} />
					</main>

					<Footer />
				</div>
			</div>
		</>
	);
}

const headerTitles = {
	'/': 'Latest Tweets',
	'/explore': 'Explore Tweets',
	'/notifications': 'Notifications',
	'/messages': 'Your Messages',
};

export default MyApp;
