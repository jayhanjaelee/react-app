import create from './http-service';

export interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
}

export default create('/users');
