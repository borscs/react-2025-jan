import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/nav-link/nav-link";

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground/>
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logoImg} alt="A plate with food on it" priority={true}/>
					NextLevel Food
				</Link>
				
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
