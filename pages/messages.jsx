import Head from 'next/head';

const Messages = ({ ...props }) => {
	return (
		<>
			<Head>
				<title>Messages</title>
			</Head>

			<div {...props}>Messages</div>
		</>
	);
};

export default Messages;
