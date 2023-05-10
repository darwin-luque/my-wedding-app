import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </main>
  );
};
export default SignInPage;
