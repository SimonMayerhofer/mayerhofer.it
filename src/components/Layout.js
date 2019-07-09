import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Layout = ({ location, children }) => {
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

	const rootPath = `${__PATH_PREFIX__}/`;
	let header;

	if (location.pathname === rootPath) {
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
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
	children: PropTypes.element.isRequired,
};
