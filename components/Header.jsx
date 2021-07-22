const Header = ({ title, ...props }) => {
	return (
		<div {...props}>
			<header className='flex items-center px-4 py-3 shadow-md'>
				<img
					className='w-7 h-7 rounded-full'
					src='https://image.flaticon.com/icons/png/512/149/149071.png'
				/>
				<p className='ml-6 text-lg font-extrabold'>{title}</p>
			</header>
		</div>
	);
};

export default Header;
