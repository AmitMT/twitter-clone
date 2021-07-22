import Head from 'next/head';

const Notifications = ({ ...props }) => {
	return (
		<>
			<Head>
				<title>Notifications</title>
			</Head>

			<div {...props}>Notifications</div>
		</>
	);
};

export default Notifications;
