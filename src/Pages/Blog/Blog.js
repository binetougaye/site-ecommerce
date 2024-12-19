import Card from "../../Component/Card";
import imgBlog1 from '../../assetes/imgBlog1.webp';
import imgBlog2 from '../../assetes/imgBlog2.webp';
import imgBlog3 from '../../assetes/imgBlog3.webp';

export default function Blog(){
    const imgs = [imgBlog1 , imgBlog2 , imgBlog3];

    return <div className="mb-5">
        <p className="text-gray-400 text-center font-sans  font-bold">Blog</p>
        <h1 className="text-center font-bold font-sans my-4 text-3xl">Blog Posts</h1>
        <div className="px-10 md:px-20 grid md:grid-cols-3 grid-cols-1 gap-6">
            {
                imgs.map((img , index)=>(
                    <Card src={img} key={index}/>
                ))
            }
        </div> 
    </div>
}