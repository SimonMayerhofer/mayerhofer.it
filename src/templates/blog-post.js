import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import SEO from '../components/SEO';

const BlogPostTemplate = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const { previous, next } = pageContext;

	return (
		<React.Fragment>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
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
		</React.Fragment>
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
