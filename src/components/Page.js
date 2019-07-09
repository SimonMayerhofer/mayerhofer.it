import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
	return (
		<div className="main-container">
			<div className="main-grid">
				<main className="main-content">{children}</main>
			</div>
		</div>
	);
};

export default Page;

Page.propTypes = {
	children: PropTypes.element.isRequired,
};
