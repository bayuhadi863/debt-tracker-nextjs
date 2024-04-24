'use client';

import signUp from '@/firebase/auth/signup';

export default function LoginPage() {
  const handleForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const { result, error } = await signUp('admin@gmail.com', 'RHSmau123@');

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
  };

  return (
    <form>
      <button onClick={handleForm}>Sign up</button>
    </form>
  );
}
