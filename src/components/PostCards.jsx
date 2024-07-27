import { Link } from "react-router-dom";
import { FaArrowUp    } from "react-icons/fa6"


export const PostCards = ( {posts, actualPage, selectedUser, pageSize} ) => {

    // funcion para cambiar la primera letra en mayuscula
    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    
    // array filtrado con los datos del usuario seleccionado
    const filteredBlogs = posts
    .filter((posts) => !selectedUser || posts.user.name == selectedUser)
    .slice((actualPage - 1 ) * pageSize, actualPage * pageSize);

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {
                filteredBlogs.map((post) =>                 
                    <div key={post.id}>
                        <div className="h-64">
                            <img className="w-full h-full rounded-xl object-cover object-center" src={`https://loremflickr.com/320/240?random=${post.id}`} alt="imgPost" />
                        </div>            
                        <div>
                            <div className="flex justify-between gap-8  mt-8">
                                <h3 className="text-white text-xl font-bold mb-4">{ capitalizeFirstLetter(post.title) }</h3>
                                <Link to={`/posts/${post.id}`}>
                                    <FaArrowUp className="text-white transform rotate-45 text-xl cursor-pointer"/>
                                </Link>
                            </div>
                            <p className="text-ftprimary">
                                { post.body }
                            </p>
                            <div className="my-8">
                                <div>
                                    <div className="flex gap-4 mt-4 items-center">
                                        <img className=" w-10 h-10 object-cover object-center rounded-full" src="https://www.ripponmedicalservices.co.uk/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg" alt="userImg" />
                                        <div>
                                            <p className="text-ftsecondary">{post.user ? post.user.name : 'Unknown'}</p>
                                            <p className="text-ftprimary">26 de junio 2024</p>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
