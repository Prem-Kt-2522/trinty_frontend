import React from "react";
import { IoClose } from "react-icons/io5";
import Header from "./Header";
import { useState } from "react";
// import{useNavigate} from "react-router-dom";
import { fetchDataFromApi } from "@/utils/api";
const Search = ({ setShowSearch }) => {

    const [query, setQuery]=useState("")
    // const navigate=useNavigate()
    const onChange= (e)=>{
        setQuery(e.target.value);
    };
    
    let {data} =  fetchDataFromApi(`/api/products?populate=*&filters[name][$contains]=${query}`);
    if(!query.length){
        data=null
    };


  return (
    <div className="fixed w-full h-full z-[999] top-0 left-0 bg-white translate-y-full animate-slideSearchwindow">
      <div className="w-full flex justify-center px-[50px] py-[10px] border-b border-black/10 relative md:px-0 md:py-5">
        <input
          className="w-full max-w-[1200px] h-[50px] text-center text-[20px] font-semibold text-[#212121] outline-none border-none uppercase md:text-[48px] md:h-[80px]"
          type="text"
          autoFocus
          value={query}
          onChange={onChange}
          placeholder="search for products"
        />
        <IoClose onClick={() => setShowSearch(false)} className="absolute text-[25px] right-[20px] top-1/2 transform -translate-y-1/2 cursor-pointer md:right-[40px] md:text-[50px]" />
      </div>
      <div className="max-w-[calc(100%-20px)] mx-auto md:max-w-[800px]">
        <div className="h-[calc(100vh-110px)] overflow-auto my-[20px] md:h-[calc(100vh-160px)]">
            
            {data?.data?.map((products)=(

                <div key={data.id} className="flex items-center gap-[10px] py-[10px] border-b border-black/10 cursor-pointer">
                <div className="bg-black/10 w-[60px] h-[60px] flex-shrink-0">
                <img src={process.env.NEXT_PUBLIC_HOST_BACKEND + product.image.data[0].attributes.url} alt="image" class="w-full h-full" />
                </div>
                <div className="overflow-hidden">
                    <span className="text-ellipsis whitespace-nowrap overflow-hidden text-[16px] leading-[1] mb-[10px] font-semibold block">{products.attributes.name}</span>
                    <span className="text-ellipsis whitespace-nowrap overflow-hidden text-[14px] leading-[1] text-black/50  block">{item.attributes.description}</span>
                </div>
            </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Search;
