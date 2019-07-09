import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ location, children }) => {
	const { site } = useStaticQuery(graphql`
		query LayoutQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const { title } = site.siteMetadata;

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
		<div>
			<header>{header}</header>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</div>
	);
};

export default Layout;
