import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const bestProducts = products.filter((item) => (item.bestseller));
        setBestSeller(bestProducts.splice(0, 5));
        setLoading(false);
    }, [products]);

    return (
        <div className='my-10'>
            <div className="text-center py-8 text-3xl">
                <Title text1={'Best'} text2={'sellers'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our best sellers: timeless favorites loved for their style, quality, and versatility.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    loading ?
                        Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="overflow-hidden bg-gray-300 h-48 w-full rounded-md"></div>
                                <div className="pt-3 pb-1 bg-gray-300 h-4 mt-2 w-2/3 rounded-md"></div>
                                <div className="text-sm font-medium flex items-center mt-2">
                                    <div className="bg-gray-300 h-4 w-12 rounded-md"></div>
                                </div>
                            </div>
                        ))
                        :
                        bestSeller.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                }
            </div>
        </div>
    );
}

export default BestSeller;
