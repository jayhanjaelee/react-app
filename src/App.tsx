import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/usersx'
        );
        setUsers(res.data);

        console.log(res);
      } catch (err) {
        console.log(err);
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        {error && <p className="text-danger">{error}</p>}
        {users.length > 1 && (
          <table>
            <thead>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
            </thead>

            <tbody>
              {users.map((user, i) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
