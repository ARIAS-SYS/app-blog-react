import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa6";



export const SinglePost = () => {

    const [user, setUser] = useState(null);
    const [postComments, setPostComments] = useState([]);

    const data = useLoaderData();



    console.log(data)

    const {id, title, body, userId} = data;

    useEffect(() => {

        const getUser =  async () => {
            let url = `https://jsonplaceholder.typicode.com/users/${userId}`;

            const response = await fetch(url);
            const data = await response.json();

            console.log('hola')
            console.log(data)

            setUser(data);
        }

        const getComments =  async () => {
            let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

            const response = await fetch(url);
            const data = await response.json();
            console.log('hola comom')

            console.log(data)

            setPostComments(data);
        }

        getUser();
        getComments();

    }, [id, userId])


    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    return (
        <div className="p-5 sm:px-8 max-w-7xl mx-auto">
            <div className="w-full h-[80vh] pt-8" >

                <img className="w-full h-full rounded-lg" src={`https://loremflickr.com/320/240?random=${id}`} alt="img" />
            
            </div>

            <div className="flex gap-10 my-5">
                <div className="flex gap-8 h-14 mt-4 items-center">
                    <img className=" w-14 h-14 object-cover object-center rounded-full" src="https://www.ripponmedicalservices.co.uk/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg" alt="userImg" />
                    <div>
                        <p className="text-ftsecondary">{user ? user.name : 'Unknown'}</p>
                        <p className="text-ftprimary">26 de junio 2024</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-4">{capitalizeFirstLetter(title)}</h3>
                <p className="text-ftsecondary my-4">
                    {body}
                </p>
                <p className="text-ftsecondary my-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At autem suscipit mollitia eaque porro dolorem reprehenderit magnam tenetur atque delectus nobis excepturi eum explicabo ab fuga, temporibus, distinctio sint perspiciatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus, corrupti molestiae veritatis vitae excepturi porro itaque officia nisi deserunt expedita sit adipisci aliquam? Alias quibusdam tempora eligendi perspiciatis saepe!
                </p>
                <p className="text-ftsecondary my-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At autem suscipit mollitia eaque porro dolorem reprehenderit magnam tenetur atque delectus nobis excepturi eum explicabo ab fuga, temporibus, distinctio sint perspiciatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus, corrupti molestiae veritatis vitae excepturi porro itaque officia nisi deserunt expedita sit adipisci aliquam? Alias quibusdam tempora eligendi perspiciatis saepe!
                </p>
                
            </div>
            {/* comentarios */}
            <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Comentarios</h3>
                <div>
                    {
                        postComments.map((comment) => 
                            <div key={comment.id} className="border-t border-slate-700 mb-4">
                                <div className="flex gap-8 mt-4">
                                    <div className="p-3">
                                        <FaUser className="h-5 w-5"/>

                                    </div>
                                    <div>
                                        <p className="text-white">{capitalizeFirstLetter(comment.name)}</p>
                                        <p className="text-ftsecondary text-sm">{comment.email}</p>
                                        <p className="mt-2">
                                            {comment.body}
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        ) 
                    }
                </div>

            </div>
        </div>
    )
}
