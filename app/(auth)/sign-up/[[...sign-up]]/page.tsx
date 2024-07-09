import { GetStaticPaths, GetStaticProps } from 'next';

// Define getStaticPaths to generate paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Replace this with logic to fetch all possible paths for sign-in
  const paths = [
    { params: { 'sigin-in': ['example-path'] } },
    // Add more paths as needed
  ];

  return {
    paths,
    fallback: false // Set fallback to false if you want to return 404 for undefined paths
  };
};

// Define getStaticProps to fetch data for the dynamic route
export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch data based on context.params['sigin-in']
  // Replace this with your actual data fetching logic
  const signInData = { exampleData: 'example' };

  return {
    props: {
      signInData,
    },
  };
};

const SignInPage = ({ signInData }) => {
  // Render your sign-in page using signInData
  return (
    <main>
      <h1>Sign In Page</h1>
      <p>Example data: {JSON.stringify(signInData)}</p>
    </main>
  );
};

export default SignInPage;
