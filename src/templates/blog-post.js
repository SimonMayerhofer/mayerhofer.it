import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Bio from '../components/Bio';
import Page from '../components/Page';

const BlogPostTemplate = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const { previous, next } = pageContext;

	return (
		<Page
			title={post.frontmatter.title}
			description={post.frontmatter.description || post.excerpt}
		>
			<h1>{post.frontmatter.title}</h1>

			<p>{post.frontmatter.date}</p>

			<div dangerouslySetInnerHTML={{ __html: post.html }} />

			<hr />

			<Bio />

			<ul>
				<li>
					{previous && (
						<Link to={previous.fields.slug} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link to={next.fields.slug} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</ul>
		</Page>
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
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`;

BlogPostTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.shape({
		previous: PropTypes.object.isRequired,
		next: PropTypes.object.isRequired,
	}).isRequired,
};
