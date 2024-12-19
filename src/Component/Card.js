
export default function Card({src}){
    return <div className="font-sans">
        <img src={src} alt="image" className="w-full h-80 object-cover"/>
        <h3 className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <p className="my-3 text-gray-400">Ham Brook • Jan 18, 2019• <span className="text-red-500 cursor-pointer">News</span></p>
        <p className="text-gray-500 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea
             maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
        </p>
        <p><span className="text-red-500 cursor-pointer">Continue Reading...</span></p>
    </div>
}