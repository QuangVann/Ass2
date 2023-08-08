import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
import Footer from '@/pages/footer';
type Props = {};

const HomePage = (props: Props) => {
  const { data: productData, error, isLoading } = useGetProductsQuery();
  const [removeProduct] =
    useRemoveProductMutation();
    return (
        <div>
            <div className="bg-gray-100">

<div className="bg-yellow-500 p-4">
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

<section className="bg-blue-800 text-white py-16">
    <div className="container mx-auto text-center">
        <div className='container mx-auto flex gap-4 items-center'>
        <img className='ml-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        <img className='ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        <img className='ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        <img className='mr-2 ml-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpRppaLI4wsDnEXlxpSdotq678pbWkU55rw&usqp=CAU" alt="" />
        
        </div>
      
        <p className="text-lg mt-8 underline">SIÊU THỊ ĐIỆN MÁY</p>
        <a href="#" className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Đặt hàng</a>
    </div>
</section>


            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-2" >SẢN PHẨM ĐẠT TOP</h2>
                <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData?.map(({ id, name, price, img }) => (
                <div key={id} className="bg-white p-6 rounded shadow">
                      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                                        <a href="#">
                                            <img className="rounded-lg w-[300px]" src={img} />
                                        </a>
                                    </figure>
                  <h2 className="text-xl font-semibold mb-2">{name}</h2>
                  <p>Giá: {price}</p>
                 
                </div>
              ))}
            </div>
          </div>
          </div>
          <Footer/>
</div>

<Outlet />

</div>

);
            
};

export default HomePage 