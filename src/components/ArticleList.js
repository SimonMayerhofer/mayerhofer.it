import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import './ArticleList.scss';

const ArticleList = () => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		query ArticleListQuery {
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
						excerpt
						fields {
							slug
						}
						frontmatter {
							date(formatString: "YYYY-MM-DD")
							title
							description
						}
					}
				}
			}
		}
	`);

	const posts = allMarkdownRemark.edges;

	return (
		<div className="ArticleList">
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				return (
					<article className="ArticleList__article" key={node.fields.slug}>
						<small className="ArticleList__date">{node.frontmatter.date}</small>

						<h3 className="ArticleList__heading">
							<Link to={node.fields.slug}>{title}</Link>
						</h3>

						<p
							className="ArticleList__excerpt"
							dangerouslySetInnerHTML={{
								__html: node.frontmatter.description || node.excerpt,
							}}
						/>

						<Link className="ArticleList__more-link" to={node.fields.slug}>
							Continue reading...
						</Link>
					</article>
				);
			})}
		</div>
	);
};

export default ArticleList;
