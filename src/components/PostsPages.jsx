import { useEffect, useState } from "react"
import { PostCards } from "./PostCards";
import { Pagination } from "./Pagination";
import { UserSelection } from "./UserSelection";
import { FaArrowUp    } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { Search } from "./Search";

export const PostsPages = () => {

    //setear los hooks useState

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [postUser, setPostUser] = useState([]);
    const [ search, setSearch ] = useState("");

    // navegacion

    const [actualPage, setActualPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);
    const [activeUser, setActiveUser] = useState(null);
    const pageSize = 12;  //post por pagina

    //función para traer los datos de la API

    const getPosts =  async () => {
        let url = `https://jsonplaceholder.typicode.com/posts?page=${actualPage}&limit=${pageSize}`;

        const response = await fetch(url);
        const data = await response.json();

        setPosts(data);
    }

    const getUsers =  async () => {
        let url = 'https://jsonplaceholder.typicode.com/users';

        const response = await fetch(url);
        const data = await response.json();

        setUsers(data);
    }

    useEffect(() => {
        getPosts();
        getUsers();

    }, [actualPage, pageSize, selectedUser]);

    useEffect(() => {
        const combinedData = posts.map(post => {
            const user = users.find(user => user.id === post.userId);
            return { ...post, user };
        });

        setPostUser(combinedData);
        
    }, [posts, users]);

    //función de búsqueda

    const searcher = (e) => {
        setSearch(e.target.value)   
    }

    //metodo de filtrado  
    let results = []
    if(!search)
        {
            results = postUser
        }else{
                results = postUser.filter( (dato) =>
                dato.title.toLowerCase().includes(search.toLocaleLowerCase()) || dato.body.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } 

    // otras funciones
    
    const handledPageChange = (pageNumber) => {
        setActualPage(pageNumber);
    }

    const handleUserChange = (user) => {
        setSelectedUser(user);
        setActualPage(1);
        setActiveUser(user);
    }

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // esto solo es para mostrar el primer post para que se vea mejor 

    const newPostUser = postUser[0];
    const newUser = newPostUser ? newPostUser.user : ''
    console.log(newPostUser)

    return (
        <>
            <div className="md:flex hidden banner w-full h-[80vh] rounded-lg  items-end p-10">

                <div className="flex gap-8">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">
                            {
                                newPostUser ? capitalizeFirstLetter(newPostUser.title) : 'Loading...'
                            }
                        </h3>
                        <p className="text-ftsecondary">
                            {   
                                newPostUser ? capitalizeFirstLetter(newPostUser.body) : 'Loading...'
                            }                        
                        </p>
                        <div className="flex gap-10 mt-5">
                            <div>
                                <p className="text-white">Escrito por:</p>
                                <div className="flex gap-2 h-10 mt-4 items-center">
                                    <img className=" w-8 h-8 object-cover object-center rounded-full" src="https://www.ripponmedicalservices.co.uk/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg" alt="userImg" />

                                    <p className="text-ftsecondary">
                                        {   
                                            newUser ? newUser.name : 'Loading...'

                                        }
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-white">Poblicado en:</p>
                                <div className="flex h-10 mt-4 items-center">
                                    <p className="text-ftsecondary">26 de junio 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to={`/posts/1`}>
                            <FaArrowUp className="text-white transform rotate-45 text-xl cursor-pointer"/>
                        </Link>
                    </div>

                </div>


            </div>

            <div className="mb-8">

                {/* search */}

                <div className="my-8">
                    <Search search={search} searcher={searcher} />
                </div>

                {/* category */}

                <div>
                    <UserSelection onSelectUser={handleUserChange} selectedUser={selectedUser} activeUser={activeUser} users={users} />
                </div>
                

            </div>

            {/* postCards */}
            <div>
                <PostCards posts={results} actualPage={actualPage} selectedUser={selectedUser}  pageSize={pageSize} />
            </div>

            {/* pagination */}
            <div>
                <Pagination onPageChange={handledPageChange} actualPage={actualPage} posts={results} pageSize={pageSize} />
            </div>
        </>
    )
}
