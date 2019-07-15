import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => {
	const { site } = useStaticQuery(graphql`
		query LayoutQuery {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);

	const { author } = site.siteMetadata;

	return (
		<React.Fragment>
			<Header />

			{children}

			<footer className="footer">
				© {new Date().getFullYear()} {author}
			</footer>
		</React.Fragment>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
