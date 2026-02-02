function Home(){
    return(
        <div className="bg-blue-100 object-cover object-center py-5 h-screen">
            <div className="flex justify-center gap-4 items-center">
                <input type="text" placeholder="Search another city" className="bg-blue-50 shadow-sm no-outline py-2  rounded-3xl px-4"></input>
                <button className="px-5 py-2 bg-blue-600 text-white text-sm rounded-3xl shadow-xl">Search</button>
            </div>
        </div>
    )
}

export default Home