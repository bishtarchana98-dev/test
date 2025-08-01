const CreateOrder = () => {
  return (
    <div className="flex align-center justify-center w-full max-w-3xl mx-auto px-2 sm:px-4 py-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Accessories
              </th>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Available
              </th>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-2 sm:px-6 py-3">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-2 sm:px-6 py-4">Silver</td>
                <td className="px-2 sm:px-6 py-4">Laptop</td>
                <td className="px-2 sm:px-6 py-4">Yes</td>
                <td className="px-2 sm:px-6 py-4">Yes</td>
                <td className="px-2 sm:px-6 py-4">$2999</td>
                <td className="px-2 sm:px-6 py-4">3.0 lb.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateOrder;
