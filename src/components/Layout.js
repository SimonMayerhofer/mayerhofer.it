import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Location } from '@reach/router';
import { isRootPath } from '../utils/path';

const Layout = ({ children }) => {
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

	return (
		<Location>
			{({ location }) => (
				<React.Fragment>
					<header className="header" role="banner">
						{isRootPath(location.pathname) ? (
							<h1>
								<Link to="/">{title}</Link>
							</h1>
						) : (
							<h3>
								<Link to="/">{title}</Link>
							</h3>
						)}
					</header>

					{children}

					<footer className="footer">
						© {new Date().getFullYear()} {author}
					</footer>
				</React.Fragment>
			)}
		</Location>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
