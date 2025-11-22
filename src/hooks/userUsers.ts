import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUesrs = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancle } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, error, isLoading, setUsers, setError };
};

export default useUesrs;
