import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { Location } from '@reach/router';
import { isRootPath } from '../utils/path';

import SocialMediaChannels from './SocialMediaChannels';

import logo from '../assets/logo-white.svg';
import './Header.scss';

const Header = () => {
	const { site, avatar } = useStaticQuery(graphql`
		query HeaderQuery {
			avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
				childImageSharp {
					fluid(maxWidth: 175, maxHeight: 175) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			site {
				siteMetadata {
					author
				}
			}
		}
	`);

	return (
		<Location>
			{({ location }) => {
				const { author } = site.siteMetadata;
				const isHome = isRootPath(location.pathname);
				const style = isHome ? 'Header--home' : 'Header--compact';

				return (
					<header className={`Header ${style}`} role="banner">
						<Link to="/">
							<img className="Header__logo" src={logo} alt="Logo" />
						</Link>

						{isHome ? (
							<React.Fragment>
								<Image
									className="Header__avatar"
									fluid={avatar.childImageSharp.fluid}
									alt={author}
								/>

								<h1 className="Header__title">{author}</h1>

								<p className="Header__bio">
									Web-Developer,
									<br />
									Co-Founder of{' '}
									<a
										href="https://mediadudes.lol?utm_source=website&utm_medium=referral&utm_campaign=simon&utm_content=bio_home"
										target="_blank"
										rel="noopener noreferrer"
									>
										<b>MEDIA</b>DUDES
									</a>
								</p>

								<SocialMediaChannels />
							</React.Fragment>
						) : null}
					</header>
				);
			}}
		</Location>
	);
};

export default Header;
