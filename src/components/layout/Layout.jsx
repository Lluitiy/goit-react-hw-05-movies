import { Link } from 'react-router-dom';
import { BiCameraMovie, BiHomeHeart } from 'react-icons/bi';

const Navi = [
	{ href: 'home', text: 'Home', icon: <BiHomeHeart /> },
	{ href: 'movies', text: 'Movies', icon: <BiCameraMovie /> },
];

export const Layout = () => {
	return (
		<div>
			<header>
				<nav>
					{Navi.map(({ href, text, icon }) => (
						<Link to={href} key={href}>
							{icon}
							{text}
						</Link>
					))}
				</nav>
			</header>
		</div>
	);
};
