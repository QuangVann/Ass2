import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
type Props = {};

const HomePage = (props: Props) => {
  const { data: productData, error, isLoading } = useGetProductsQuery();
  const [removeProduct] =
    useRemoveProductMutation();
    return (
        <div>
            <div className="bg-gray-100">

<div className="bg-blue-500 p-4">
    <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <a href="#" className=""><img className="w-[50px]" src="https://livingdream.me/thumb.php?src=1694336750_957843700_41833462.png&t=a" alt="" /></a>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:underline">Home</a></li>
                <li><a href="#" className="text-white hover:underline">About</a></li>
                <li><a href="#" className="text-white hover:underline">Contact</a></li>
            </ul>
        </div>
    </div>
</div>

<section className="bg-violet-800 text-white py-16">
    <div className="container mx-auto text-center">
        <div className='container mx-auto flex gap-4 items-center'>
        <img className='ml-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        <img className='ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        <img className='ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        <img className='mr-2 ml-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        
        </div>
        <h1 className="text-4xl font-bold mb-4">Điện máy xanh</h1>
        <p className="text-lg">Có gì khó có điện máy xanh lo</p>
        <a href="#" className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Đặt hàng</a>
    </div>
</section>


            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-2" >SẢN PHẨM ĐẠT TOP</h2>
                <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData?.map(({ id, name, price }) => (
                <div key={id} className="bg-white p-6 rounded shadow">
                  <h2 className="text-xl font-semibold mb-2">{name}</h2>
                  <p>Price: {price}</p>
                  
                </div>
              ))}
            </div>
          </div>
          </div>
</div>

<Outlet />
</div>

);
            
};

export default HomePage 