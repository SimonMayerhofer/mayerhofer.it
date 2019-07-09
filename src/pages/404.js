import React from 'react';

import SEO from '../components/SEO';

const NotFoundPage = () => {
	return (
		<React.Fragment>
			<SEO title="404: Not Found" />
			<h1>Not Found</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</React.Fragment>
	);
};

export default NotFoundPage;
