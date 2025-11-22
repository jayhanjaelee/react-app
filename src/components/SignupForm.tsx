import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const UserInfo = z.object({
  username: z.string().min(3, { message: 'hello, world' }).max(10),
  password: z.string().min(6).max(15),
  email: z.email().min(3).max(10),
  phone: z.string().min(10),
});

type SignupFormData = z.infer<typeof UserInfo>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: zodResolver(UserInfo) });

  return (
    <div className="mb-3">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label htmlFor="username" className="form-label mb-3">
          Username
        </label>
        <input
          id="username"
          {...register('username')}
          type="text"
          className="form-control mb-3"
        />
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}

        <label className="form-label mb-3">Password</label>
        <input
          {...register('password')}
          type="Password"
          className="form-control mb-3"
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}

        <label className="form-label mb-3">Email</label>
        <input
          {...register('email')}
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <label className="form-label mb-3">Phone</label>
        <input
          {...register('phone')}
          type="text"
          className="form-control mb-3"
        />
        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}

        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
