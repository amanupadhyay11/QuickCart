'use client'
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const ProductList = () => {
  const { router, getToken, user } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerProduct = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get('/api/product/seller-list', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        setProducts(data.products);
        setLoading(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteProduct = async (productId) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const token = await getToken();
      const { data } = await axios.delete(`/api/product/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        toast.success("Product deleted");
        fetchSellerProduct();
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchSellerProduct();
    }
  }, [user]);

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-lg font-medium">All Products</h2>
          <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border border-gray-300">
            <table className="table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left">
                <tr>
                  <th className="w-2/5 px-4 py-3 font-medium">Product</th>
                  <th className="px-4 py-3 font-medium max-sm:hidden">Category</th>
                  <th className="px-4 py-3 font-medium">Price</th>
                  <th className="px-4 py-3 font-medium max-sm:hidden">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {products.map((product) => (
                  <tr key={product._id} className="border-t border-gray-200">
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <div className="bg-gray-100 rounded p-2">
                        <Image
                          src={product.image[0]}
                          alt="Product Image"
                          width={64}
                          height={64}
                          className="rounded w-16 h-16 object-cover"
                        />
                      </div>
                      <span className="truncate">{product.name}</span>
                    </td>
                    <td className="px-4 py-3 max-sm:hidden">{product.category}</td>
                    <td className="px-4 py-3">${product.offerPrice}</td>
                    <td className="px-4 py-3 space-x-1 max-sm:hidden">
                      <button
                        onClick={() => router.push(`/product/${product._id}`)}
                        className="px-3 py-1.5 text-sm bg-orange-600 text-white rounded"
                      >
                        Visit
                      </button>
                      <button
                        onClick={() => router.push(`/product/edit/${product._id}`)}
                        className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded"
                      >
                        Edit
                      </button>
                     <button
  onClick={() => deleteProduct(product._id)}
  className="p-2 bg-white 600 text-white rounded"
  title="Delete"
>
  <img
    width="20"
    height="20"
    src="https://img.icons8.com/material-rounded/24/filled-trash.png"
    alt="Delete"
  />
</button>


                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductList;