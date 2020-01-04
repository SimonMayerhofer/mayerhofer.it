import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import WorkCTA from './WorkCTA';

const Layout = ({ children }) => {
	return (
		<>
			<Header />

			{children}

			<WorkCTA />

			<Footer />
		</>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
