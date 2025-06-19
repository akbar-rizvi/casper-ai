

const GoogleLoginButton = () => {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
//   const redirectUri = `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/auth/google`; //   backend api
  const redirectUri = `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/auth/google` //   backend api


//   console.log({ googleClientId, redirectUri });

  const handleLogin = () => {
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile&access_type=offline&prompt=consent`;

    console.log({"oauthUrl": oauthUrl });
    window.location.href = oauthUrl;
  };

  return (
    <button
      className=" text-white px-4 py-2 rounded cursor-pointer"
      onClick={handleLogin}
    >
       Google
    </button>
  );
};

export default GoogleLoginButton;
