import { useAuth } from "../lib/auth";

export default function Index() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <p>Name: {auth.user.name}</p>
      <img src={auth.user.photoUrl} />
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <>
      <button onClick={(e) => auth.signinWithGitHub()}>
        Sign In With GitHub
      </button>
      <button onClick={(e) => auth.signinWithGoogle()}>
        Sign In With Google
      </button>
    </>
  );
}
