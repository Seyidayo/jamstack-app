import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ProductType } from "../../types";
import Layout from "../../components/templates/Layout";
import StarRating from "../../components/StarRating";

const ProductListPage = () => {
  const productsList = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        nodes {
          contentful_id
          name
          image {
            file {
              fileName
              url
            }
          }
          starrating
          reviews
          price
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="container max-w-5xl bg-blue:400 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
          Pick your favorite mattress
        </h2>

        <div className="grid grid-cols-1 gap-y-10 tablet:grid-cols-2 gap-x-6 laptop:grid-cols-3">
          {productsList.allContentfulProduct.nodes.map(
            (product: ProductType) => (
              <div key={product.contentful_id}>
                <div className="group relative">
                  <div className="group relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 laptop:h-60 laptop:aspect-none">
                    <img
                      src={product.image.file.url}
                      alt=""
                      className="w-full h-full object-center object-cover laptop:w-full laptop:h-full"
                    />
                  </div>
                  <div className="mt-4">
                    <Link to={`/book/${product.contentful_id}`}>
                      <h3 className="text-md text-gray-700 tracking-loose hover:text-blue-400 mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-900 flex items-center">
                      <strong> ${product.price} </strong>
                      <span className="mx-2">&bull;</span>
                      <StarRating stars={product.starrating} />
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductListPage;
