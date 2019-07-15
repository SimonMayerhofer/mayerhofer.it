/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import SocialMediaChannels from './SocialMediaChannels';

import './Bio.scss';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
				childImageSharp {
					fluid(maxWidth: 150) {
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

	const { author } = data.site.siteMetadata;
	return (
		<div className="Bio">
			<Image
				className="Bio__avatar"
				fluid={data.avatar.childImageSharp.fluid}
				alt=""
			/>
			<div className="Bio__content">
				<h2>{author}</h2>
				<p className="Bio__description">
					Web-Developer, Co-Founder of{' '}
					<a
						href="https://mediadudes.lol?utm_source=website&utm_medium=referral&utm_campaign=simon&utm_content=bio_home"
						target="_blank"
						rel="noopener noreferrer"
					>
						<b>MEDIA</b>DUDES
					</a>
				</p>
				<SocialMediaChannels />
			</div>
		</div>
	);
};

export default Bio;
