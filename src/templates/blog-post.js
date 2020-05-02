import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Page from '../components/Page';

import './blog-post.scss';

const BlogPostTemplate = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Layout>
			<Page
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			>
				<article className="blog-post">
					<header>
						<time className="blog-post__date" dateTime={post.frontmatter.date}>
							{post.frontmatter.date}
						</time>

						<h1 className="blog-post__heading">{post.frontmatter.title}</h1>

						{post && post.frontmatter && post.frontmatter.featuredImage && (
							<div className="blog-post__featured-image-wrapper">
								<Img
									className="blog-post__featured-image"
									fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
								/>
							</div>
						)}
					</header>

					<section dangerouslySetInnerHTML={{ __html: post.html }} />
				</article>

				<div className="blog-post__edit-link-wrapper">
					<a
						className="blog-post__edit-link"
						href={`https://github.com/SimonMayerhofer/mayerhofer.it/edit/master/src/blog/${post.parent.relativePath}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<FontAwesomeIcon
							className="blog-post__edit-link-icon"
							icon={faPen}
						/>{' '}
						Edit this post on GitHub
					</a>
				</div>

				<Bio />
			</Page>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "YYYY-MM-DD")
				description
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
			parent {
				... on File {
					relativePath
				}
			}
		}
	}
`;

BlogPostTemplate.propTypes = {
	data: PropTypes.object.isRequired,
};
