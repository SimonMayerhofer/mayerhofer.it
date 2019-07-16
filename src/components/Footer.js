import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
			<br />
			<Link to="/site-notice/">Site Notice</Link> |{' '}
			<Link to="/privacy-policy/">Privacy Policy</Link>
		</footer>
	);
};

export default Footer;
