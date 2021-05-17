import React from 'react';
import Navbar from '../components/navbar';
import Footer from './footer';

function Layout({ children }) {
	return (
		<div>
			<Navbar login transparent={false} />
			{children}
			<Footer absolute={true} />
		</div>
	);
}

export default Layout;
