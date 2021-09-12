const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const ProductPage = path.resolve("./src/components/Product.tsx");

  const result = await graphql(
    `
      {
        allContentfulProduct {
          nodes {
            contentful_id
            name
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful products`,
      result.errors
    );
    return;
  }

  const products = result.data.allContentfulProduct.nodes;
  if (products.length > 0) {
    products.forEach((post, index) => {
      const previousPostSlug =
        index === 0 ? null : products[index - 1].contentful_id;
      const nextPostSlug =
        index === products.length - 1
          ? null
          : products[index + 1].contentful_id;

      createPage({
        path: `/book/${post.contentful_id}/`,
        component: ProductPage,
        context: {
          contentful_id: post.contentful_id,
          previousPostSlug,
          nextPostSlug,
        },
      });
    });
  }
};
