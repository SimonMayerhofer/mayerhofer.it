import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { isRootPath } from '../utils/path';

const Layout = ({ path, children }) => {
	const { site } = useStaticQuery(graphql`
		query LayoutQuery {
			site {
				siteMetadata {
					title
					author
				}
			}
		}
	`);

	const { title, author } = site.siteMetadata;

	let header;

	if (isRootPath(path)) {
		header = (
			<h1>
				<Link to="/">{title}</Link>
			</h1>
		);
	} else {
		header = (
			<h3>
				<Link to="/">{title}</Link>
			</h3>
		);
	}

	return (
		<React.Fragment>
			<header className="header" role="banner">
				{header}
			</header>

			{children}

			<footer className="footer">
				© {new Date().getFullYear()} {author}
			</footer>
		</React.Fragment>
	);
};

export default Layout;

Layout.propTypes = {
	path: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
