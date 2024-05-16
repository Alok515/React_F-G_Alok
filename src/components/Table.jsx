import { Link } from 'react-router-dom';

export const Table = () => {
    const len = localStorage.length;
    const data = [];
    for (let i = 0; i < len; i++) {
        data.push(JSON.parse(localStorage.getItem(i + 1)));
    }
    return (
        <div>
            <h1 className='text-center my-8 text-white font-extrabold text-2xl'>Table Data</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Customer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Host Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Beverage Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Neatness Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                OverAll Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row, key) => {
                                return (
                                    <tr  key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {row.userName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {row.userEmail}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.userPhone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.hostRating}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.drinkRating}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.cleanRating}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.overAllRating}
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <div className='text-center mb-4 mt-8'>
                    <Link to="/">
                        <button className="bg-green-400 hover:bg-green-300 m-auto rounded-md py-1 px-8">Give FeedBack</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

