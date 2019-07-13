/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({ fromPath: "http://iamgary.li/v1", toPath: "https://goofy-fermat-31a7f4.netlify.com", statusCode: 200, isPermanent: true, force: true })
}