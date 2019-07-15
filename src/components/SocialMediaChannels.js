import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faFacebookF,
	faStackOverflow,
	faTwitter,
	faLinkedin,
	faXing,
} from '@fortawesome/free-brands-svg-icons';

import './SocialMediaChannels.scss';

const SocialMediaChannels = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						social {
							github
							stackoverflow
							facebook
							twitter
							linkedin
							xing
						}
					}
				}
			}
		`,
	);

	const channels = site.siteMetadata.social;

	return (
		<div className="SocialMediaChannels">
			{channels.github ? (
				<a
					className="SocialMediaChannels__link"
					href={`https://github.com/${channels.github}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<FontAwesomeIcon
						className="SocialMediaChannels__icon"
						icon={faGithub}
					/>
				</a>
			) : null}

			{channels.stackoverflow ? (
				<a
					className="SocialMediaChannels__link"
					href={`http://stackoverflow.com/users/${channels.stackoverflow}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="StackOverflow"
				>
					<FontAwesomeIcon
						className="SocialMediaChannels__icon"
						icon={faStackOverflow}
					/>
				</a>
			) : null}

			{channels.facebook ? (
				<a
					className="SocialMediaChannels__link"
					href={`https://www.facebook.com/${channels.facebook}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<FontAwesomeIcon
						className="SocialMediaChannels__icon"
						icon={faFacebookF}
					/>
				</a>
			) : null}

			{channels.twitter ? (
				<a
					className="SocialMediaChannels__link"
					href={`https://twitter.com/${channels.twitter}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Twitter"
				>
					<FontAwesomeIcon
						className="SocialMediaChannels__icon"
						icon={faTwitter}
					/>
				</a>
			) : null}

			{channels.linkedin ? (
				<a
					className="SocialMediaChannels__link"
					href={`https://www.linkedin.com/in/${channels.linkedin}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<FontAwesomeIcon
						className="SocialMediaChannels__icon"
						icon={faLinkedin}
					/>
				</a>
			) : null}

			{channels.xing ? (
				<a
					className="SocialMediaChannels__link"
					href={`https://www.xing.com/profile/${channels.xing}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Xing"
				>
					<FontAwesomeIcon
						className="SocialMediaChannels__icon"
						icon={faXing}
					/>
				</a>
			) : null}
		</div>
	);
};

export default SocialMediaChannels;
