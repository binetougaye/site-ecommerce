
export default function ProductCard({produit}){
    return <div>
             <div key={produit.id} className="flex items-center w-[300px] mt-5">
                <div>
                 <div className="relative w-[300px]  ease-in duration-300 transform hover:scale-105">
                  <img src={produit.image} alt="Compositions florales"className=" w-[300px] object-cover"/>
                     <div className="  w-[250px] h-[255px] absolute inset-6 border-4 border-transparent hover:border-orange-600 hover:scale-105"></div>
       </div>
                        <p className="text-xxl text-center mt-5">{produit.name}</p>
                        <div className="flex gap-8 justify-center mt-3">
                                        <div className="flex gap-3 justify-center">
                                            <i className="text-orange-400 mt-1 text-sm">{produit.iconstar}</i>
                                            <p className="text-sm">{produit.p_star}</p>
                                        </div>
                                        <div className="flex gap-3 justify-center">
                                            <i className="text-gray-300 mt-1 text-sm">{produit.iconheart}</i>
                                            <p className="text-sm">{produit.p_heart}</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 mt-3 text-sm text-center">{produit.lorem}</p>
                                    <div className="mt-5 flex justify-center gap-3">
                                        <button className=" p-2 border-2 w-[85px] h-[38px] font-bold text-sm text-center text-white bg-black hover:bg-white hover:border-black hover:text-black border-transparent">
                                            {produit.button_cart}
                                        </button>
                                        <button className="border-2 border-black p-2 border-2 w-[85px] h-[38px] font-bold text-sm text-center text-black bg-white hover:bg-black hover:text-white ">
                                            {produit.button_view}
                                        </button>
                                    </div>
                                </div>
                            </div>

    </div>
}