import Layout from "../../components/layouts/Layout";

const DetailProduct = () => {
  return (
    <Layout>
      <div className="flex gap-2">
        <div>
          <span>-></span>
        </div>
        <div>
          <span className="text-sm text-gray-500">Jasa / freelancer</span>
        </div>
        <div>
          <span className="text-sm text-gray-500"> > </span>
        </div>
        <div>
          <span className="text-sm text-blue-500">Detail jasa</span>
        </div>
      </div>
      <div className="mt-12">
        <div>
          <h1 className="text-3xl font-base">Cinematic Bali Event</h1>
        </div>
        <div className="mt-4">
          <h1 className="text-sm text-gray-500 font-base">4.8/5 (24 Ulasan)</h1>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-5">
              <img
                className="w-full object-cover rounded-md"
                style={{ height: "538px" }}
                src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              />
            </div>
            <div className="col-span-1 grid-rows-4 gap-2">
              <div className="mb-2">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
              <div className="my-2">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
              <div className="mt-2">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
              <div className="mt-2">
                <div className="bg-black absolute h-32 opacity-75 rounded-md" />
                <img
                  className="w-full h-32 object-cover rounded-md opacity-75"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DetailProduct;
