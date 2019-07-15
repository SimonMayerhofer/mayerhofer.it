import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Footer.scss';

const Footer = () => {
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
		<footer className="Footer">
			© {new Date().getFullYear()} {author}
		</footer>
	);
};

export default Footer;
