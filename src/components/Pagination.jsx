import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export const Pagination = ({ onPageChange, actualPage, posts, pageSize}) => {


    const totalPages = Math.ceil(posts.length / pageSize);

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
                <button className="hover:text-ftsecondary" onClick={() => onPageChange(actualPage - 1)} disabled={actualPage === 1}><HiArrowSmLeft className="w-5 h-5 inline-block mr-2" />Anterior</button>
            </li>
            <div className="flex gap-8 flex-wrap">{renderPaginationLinks()}</div>
            <li>
                <button className="hover:text-ftsecondary" onClick={() => onPageChange(actualPage + 1)} disabled={actualPage === totalPages}>Siguiente <HiArrowSmRight className="w-5 h-5 inline-block mr-2"  /></button>
            </li>
        </ul>
    )
}
