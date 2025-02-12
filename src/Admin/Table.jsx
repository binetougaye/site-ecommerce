import React from "react";
import Pagination from "./Pagination";
import Filtre from "./Filtre";

export default function Table({tr}){

    return<div>
        <Filtre/>
    <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
    <table class="w-full text-left table-auto min-w-max mt-4">
        <thead>
        <tr>
            {
                tr.map((tr , index)=>(
                    <th class="p-4 border-b border-slate-400 bg-slate-450" key={index}>
                        <p class="text-xl leading-none text-black font-bold ">
                            {tr}
                        </p>
                    </th>
                ))
            }
        </tr>
        </thead>
        <tbody>
            {/* <tr class="hover:bg-slate-50 border-b border-slate-200">
                <td class="p-4 py-5">
                <p class="block font-semibold text-sm text-slate-800">PROJ1001</p>
                </td>
                <td class="p-4 py-5">
                <p class="text-sm text-slate-500">John Doe</p>
                </td>
                <td class="p-4 py-5">
                <p class="text-sm text-slate-500">$1,200.00</p>
                </td>
                <td class="p-4 py-5">
                <p class="text-sm text-slate-500">2024-08-01</p>
                </td>
                <td class="p-4 py-5">
                <p class="text-sm text-slate-500">2024-08-15</p>
                </td>
            </tr> */}
        </tbody>
    </table>
    <Pagination/>
    
    </div>
    </div>
}