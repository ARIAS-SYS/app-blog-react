import { PostsPages } from "./PostsPages"


export const Banner = () => {
    return (
        <div className="px-5 sm:px-8 py-12 mx-auto max-w-7xl">
            
            <div className="max-w-4xl mb-8">
                <h1 className="text-white text-2xl lg:text-4xl font-bold">Bienvenido A Nuestro Blog</h1>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa commodi ratione, temporibus modi ullam iure.
                    Lorem ipsum dolor sit amet consectetur adipisicinbus modi ullam iure.
                </p>
            </div>

            <div>
                
                <PostsPages/>

            </div>

            
        </div>
    )
}
