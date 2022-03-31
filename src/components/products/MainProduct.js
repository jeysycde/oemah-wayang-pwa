const MainProduct = () => {
    return(
        <>
        <div>
        <div>
            <img className="object-cover rounded-t-lg w-full h-72" src={"https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"} alt="Product Image" />
        </div>
        <div className="p-4 border border-gray-300 rounded-b-lg">
            <div>
                <h1 className="text-lg">Paket Foto Liburan</h1>
                <div>
                    <span className="text-sm text-gray-400">Exova Media</span>
                </div>
                <div className="mt-2">
                    <span className="text-red-500">Rp2.000.000</span>
                </div>
            </div>
            <div className="mt-4">
                <button className="p-2 text-white bg-blue-500 w-full rounded-lg">Lihat detil</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default MainProduct