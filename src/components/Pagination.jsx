import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export const Pagination = ({ onPageChange, actualPage, posts, pageSize, selectedUser}) => {
    
    // array filtrado con los datos del usuario seleccionado
    const filteredBlogs = posts
    .filter((posts) => !selectedUser || posts.user.name == selectedUser)
    .slice((actualPage - 1 ) * pageSize, actualPage * pageSize);

    // condicion para calcular el total de paginas que tenemos tomando en cuenta la busqueda
    const totalPages = selectedUser == null ? Math.ceil(posts.length / pageSize) : Math.ceil(filteredBlogs.length / pageSize);

    // renderizando la paginacion
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages}, ( _, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === actualPage ? "bg-bgtertiary w-10 h-10 flex justify-center items-center rounded-full cursor-pointer" : "w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-bgsecondary rounded-full"} key={pageNumber} >
                <a href="#" onClick={() => onPageChange(pageNumber)} >{pageNumber}</a>
            </li>
        ))
    }

    return (
        <ul className="my-8 flex flex-wrap justify-between items-center gap-8">
            <li>
                <button className="hover:text-ftsecondary disabled:text-ftprimary" onClick={() => onPageChange(actualPage - 1)} disabled={actualPage === 1}><HiArrowSmLeft className="w-5 h-5 inline-block mr-2" />Anterior</button>
            </li>
            <div className="flex gap-8 flex-wrap">{renderPaginationLinks()}</div>
            <li>
                <button className="hover:text-ftsecondary disabled:text-ftprimary" onClick={() => onPageChange(actualPage + 1)} disabled={actualPage === totalPages}>Siguiente <HiArrowSmRight className="w-5 h-5 inline-block mr-2"  /></button>
            </li>
        </ul>
    )
}
