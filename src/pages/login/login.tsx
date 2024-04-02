const LoginPage = () => {
  return (
    <div>
      <div>Sign In</div>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button>Log in</button>
      <label htmlFor="remember-me">Remember Me</label>
      <input type="checkbox" id="remember-me" />
      <a href="#">Forgot Password</a>
    </div>
  );
};

export default LoginPage;
