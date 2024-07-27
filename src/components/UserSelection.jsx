
export const UserSelection = ({ onSelectUser, activeUser, users }) => {

    const newUsers = users.map((user) => user.name)
    

    return (
        <>
            <h4 className="text-ftsecondary mt-4">Filtrar por usuario</h4>
            <div className="my-8 text-sm flex flex-col  sm:flex-row  gap-8 flex-wrap border-b border-slate-700 sm:items-center pb-4">
                <button className={`flex gap-2 items-center hover:text-ftsecondary space-x-16 ${activeUser === null ? "text-white border border-slate-700 rounded-full p-2" : ""}`} onClick={() => onSelectUser(null)}>Todos</button>
                {
                    newUsers.map((name) => (
                        <button onClick={() => onSelectUser(name)} className={`flex gap-2 items-center text-sm hover:text-ftsecondary space-x-16 ${activeUser === name ? "text-white border border-slate-700 rounded-full p-2" : ""}`} key={name}>
                            <img className=" w-5 h-5 object-cover object-center rounded-full" src="https://www.ripponmedicalservices.co.uk/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg" alt="userImg" />
                            {name}
                        </button>
                    ))

                }
            </div>
        </>
        
    )
}
