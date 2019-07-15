import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ArticleList from '../components/ArticleList';
import Page from '../components/Page';

const index = ({ data, path }) => {
	return (
		<Page
			title="Simon Mayerhofer | Web-Developer"
			description={data.site.siteMetadata.description}
			path={path}
		>
			<h2>LATEST ARTICLES</h2>

			<ArticleList />
		</Page>
	);
};

export default index;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				description
			}
		}
	}
`;

index.propTypes = {
	data: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
};
