import Link from './Link';
import {
	BellIcon,
	BellIconEmpty,
	HomeIcon,
	HomeIconEmpty,
	MailboxIcon,
	MailboxIconEmpty,
	SearchIcon,
	SearchIconEmpty,
} from './SpecialIcon';

const Footer = ({ ...props }) => {
	return (
		<footer className='flex shadow-inner' {...props}>
			<Link
				href='/'
				className='group flex items-center justify-center w-1/4 py-3 transition-colors md:hover:bg-gray-100 active:bg-gray-200'
				activeComponent={<HomeIcon className={`p-px w-7 h-7 text-blue-500`} />}
				inactiveComponent={
					<HomeIconEmpty
						className={`transition p-px w-7 h-7 text-gray-500 group-hover:text-blue-500`}
					/>
				}
			/>
			<Link
				href='/explore'
				className='group flex items-center justify-center w-1/4 py-3 transition-colors md:hover:bg-gray-100 active:bg-gray-200'
				activeComponent={<SearchIcon className={`p-px w-7 h-7 text-blue-500`} />}
				inactiveComponent={
					<SearchIconEmpty className={`p-px w-7 h-7 text-gray-500 group-hover:text-blue-500`} />
				}
			/>
			<Link
				href='/notifications'
				className='group flex items-center justify-center w-1/4 py-3 transition-colors md:hover:bg-gray-100 active:bg-gray-200'
				activeComponent={<BellIcon className={`p-px w-7 h-7 text-blue-500`} />}
				inactiveComponent={
					<BellIconEmpty className={`p-px w-7 h-7 text-gray-500 group-hover:text-blue-500`} />
				}
			/>
			<Link
				href='/messages'
				className='group flex items-center justify-center w-1/4 py-3 transition-colors md:hover:bg-gray-100 active:bg-gray-200'
				activeComponent={<MailboxIcon className={`p-px w-7 h-7 text-blue-500`} />}
				inactiveComponent={
					<MailboxIconEmpty className={`p-px w-7 h-7 text-gray-500 group-hover:text-blue-500`} />
				}
			/>
		</footer>
	);
};

export default Footer;
