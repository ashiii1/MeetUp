// Import SignUp from Clerk.js
import { SignUp } from '@clerk/nextjs';

// Define your SignUpPage component
const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

// Export your SignUpPage component as default
export default SignUpPage;
