import { useState, useEffect } from "react";
import axios from "axios";

const Hook = () => {
  const [angka, setAngka] = useState([]);
  const [nama, setNama] = useState([0]);
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result.data);
      setUser(result.data);
    });
  }, []);

  return (
    <div>
      {/* AXIO API BELUM SELESAI  */}
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Id
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.id}
                </th>
                <td class="px-6 py-4">{user.name}</td>
                <td class="px-6 py-4">{user.username}</td>
                <td class="px-6 py-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <label className="mr-5 text-xl font-bold" htmlfor="">
        nama:
      </label>
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(console.log(e.target.value))}
      />
    </div>
  );
};

export default Hook;
