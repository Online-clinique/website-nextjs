import React from 'react';
import Navbar from '../components/navbar';
import Footer from './footer';

function Layout({ children, absolute }) {
	return (
		<div>
			<Navbar login transparent={false} />
			{children}
			<Footer absolute={absolute} />
		</div>
	);
}

export default Layout;
