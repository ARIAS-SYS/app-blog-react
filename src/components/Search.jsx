import { HiOutlineSearch } from "react-icons/hi";

export const Search = ({ search, searcher }) => {
    return (
        <div>
            <p className="text-ftsecondary my-7 text-center">Busca temas de interes</p>
            <div className="border border-slate-700 w-full max-w-2xl py-3 px-6 rounded-full mx-auto flex gap-2">
                <input value={search} onChange={searcher} type="text" className="w-full bg-transparent border-none focus:outline-none focus:right-0" placeholder="Buscar..." />
                <HiOutlineSearch className="w-6 h-6 cursor-pointer" />
            </div>
        </div>
    )
}
