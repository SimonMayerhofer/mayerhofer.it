import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import WorkCTA from './WorkCTA';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Header />

			{children}

			<WorkCTA />

			<Footer />
		</React.Fragment>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
