import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ArticleList from '../components/ArticleList';
import Layout from '../components/Layout';
import Page from '../components/Page';

const index = ({ data }) => {
	return (
		<Layout>
			<Page
				title="Simon Mayerhofer | Web-Developer"
				description={data.site.siteMetadata.description}
			>
				<h2>LATEST ARTICLES</h2>

				<ArticleList />
			</Page>
		</Layout>
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
};
