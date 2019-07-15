import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';

const NotFoundPage = () => {
	return (
		<Page title="404: Not Found">
			<h1>Not Found</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Page>
	);
};

export default NotFoundPage;
