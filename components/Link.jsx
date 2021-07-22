import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Link = ({ href, activeComponent, inactiveComponent, ...rest }) => {
	const router = useRouter();

	return (
		<NextLink href={href}>
			<a {...rest}>{router.pathname === href ? activeComponent : inactiveComponent}</a>
		</NextLink>
	);
};

export default Link;
