import { SignUp } from '@clerk/nextjs';
import { GetStaticPaths, GetStaticProps } from 'next';

// Define the paths you want to pre-render
export async function generateStaticParams() {
  const paths = [
    { params: { 'sign-up': [] } }, // pre-render /sign-up
    // Add more paths if needed
  ];

  return paths;
}

// Fetch data based on context.params['sign-up']
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}, // pass data to the page component as props if needed
  };
};

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
}
