import Head from 'next/head';

const Explore = ({ ...props }) => {
	return (
		<>
			<Head>
				<title>Explore</title>
			</Head>

			<div {...props}>Explore</div>
		</>
	);
};

export default Explore;
