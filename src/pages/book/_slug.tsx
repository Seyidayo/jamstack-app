import React, { ReactPropTypes } from "react";
import { graphql, navigate } from "gatsby";
import { get } from "lodash";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { PaystackConsumer } from "react-paystack";

import Layout from "../../components/templates/Layout";
import StarRating from "../../components/StarRating";

import * as styles from "./_slug.module.css";

const payStackConfig = {
  reference: new Date().getTime().toString(),
  email: process.env.PAYSTACK_TEST_EMAIL || "",
  publicKey: process.env.PAYSTACK_PUBLIC_KEY || "",
};

const ProductPage = (props: ReactPropTypes) => {
  const product = get(props, `data.contentfulProduct`);

  const handleSuccess = (_reference: string) => {
    // TODO: send reference
    navigate("/book/appointment");
  };

  const handleClose = () => {};

  const componentProps = {
    ...payStackConfig,
    amount: product.price * 500 * 100,
    text: "Book Sleep Appointment",
    onSuccess: (reference: string) => handleSuccess(reference),
    onClose: handleClose,
  };

  const isUserFavorite = product.reviews > 20000 && product.starrating >= 4;
  return (
    <Layout showBackButton={true}>
      <div className="container max-w-5xl bg-blue:400 mx-auto">
        <div className="grid grid-cols-1 gap-12 tablet:grid-cols-2 ">
          <section className="pr-4">
            <header className="mb-6 tablet:mt-2">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mb-2">
                {product.name}{" "}
                {isUserFavorite && (
                  <span className="inline-block font-light mt-4 bg-blue-200 text-sm px-2 py-1 rounded-md">
                    Customer Favorite
                  </span>
                )}
              </h1>
              <p className="font-bold flex items-center">
                <span className="text-xl">${product.price}</span>
                <span className="mx-2 text-gray-500">&bull;</span>
                <StarRating stars={product.starrating} />
                <span className="text-gray-500 text-sm ml-1">
                  {product.reviews} reviews
                </span>
              </p>
            </header>

            <div
              className={`${styles.image} tablet:hidden mb-6 group relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 laptop:h-100 laptop:aspect-none`}
            >
              <img
                src={product.image.file.url}
                alt=""
                className="w-full h-full object-center object-cover laptop:w-full laptop:h-full"
              />
            </div>

            <div className="description__wrapper">
              <div className="mb-6 leading-loose">
                {renderRichText(product.description)}

                <p className="mt-6">
                  Like this product and{" "}
                  <a
                    href={product.link}
                    target="_blank"
                    className="text-blue-400"
                  >
                    want to buy
                  </a>
                </p>
              </div>

              <PaystackConsumer {...componentProps}>
                {({ initializePayment }: any) => (
                  <button
                    type="button"
                    className="bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold"
                    onClick={() =>
                      initializePayment(handleSuccess, handleClose)
                    }
                  >
                    Book
                  </button>
                )}
              </PaystackConsumer>
              <span className="block mt-4 text-center text-sm text-gray-500">
                in stock and ready for booking
              </span>
            </div>
          </section>

          <div
            className={`${styles.image} hidden tablet:block group relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 laptop:h-100 laptop:aspect-none`}
          >
            <img
              src={product.image.file.url}
              alt=""
              className="w-full h-full object-center object-cover laptop:w-full laptop:h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const productQuery = graphql`
  query ProductByContentfulId($contentful_id: String!) {
    contentfulProduct(contentful_id: { eq: $contentful_id }) {
      contentful_id
      name
      description {
        raw
      }
      image {
        file {
          url
        }
      }
      price
      reviews
      starrating
      link
    }
  }
`;

export default ProductPage;
