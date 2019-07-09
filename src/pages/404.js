import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';

const NotFoundPage = ({ path }) => {
	return (
		<Page title="404: Not Found" path={path}>
			<h1>Not Found</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Page>
	);
};

export default NotFoundPage;

NotFoundPage.propTypes = {
	path: PropTypes.string.isRequired,
};
