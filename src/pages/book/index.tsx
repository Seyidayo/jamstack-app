import React from "react";
import Layout from "../../components/templates/Layout";

const BookingPage = () => {
    return (
        <Layout>
            {/* <section className="max-w-5xl mx-auto"> */}

            <div className="max-w-5xl bg-blue:400 mx-auto py-24">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Pick your favorite mattress
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                alt="Front of men&#039;s Basic Tee in black."
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        ></span>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* </section> */}
        </Layout>
    );
};

export default BookingPage;
