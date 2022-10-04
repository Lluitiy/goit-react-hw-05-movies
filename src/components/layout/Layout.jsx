import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BiCameraMovie, BiHomeHeart } from 'react-icons/bi';
import { Header, Navigation, NavItem } from './Layout.styled';
import { Spinner } from 'components/Spinner/Spinner';

const Navi = [
	{ href: 'home', text: 'Home', icon: <BiHomeHeart /> },
	{ href: 'movies', text: 'Movies', icon: <BiCameraMovie /> },
];

export const Layout = () => {
	return (
		<>
			<Header>
				<Navigation>
					{Navi.map(({ href, text, icon }) => (
						<NavItem to={href} key={href}>
							{icon}
							{text}
						</NavItem>
					))}
				</Navigation>
			</Header>
			<Suspense fallback={<Spinner />}>
				<Outlet />
			</Suspense>
		</>
	);
};
