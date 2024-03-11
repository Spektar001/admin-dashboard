const LoginForm = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action=""
        className="w-[450px] h-[450px] flex flex-col items-center justify-center gap-7 bg-[--bgSoft] p-10 rounded-lg formLogin"
      >
        <h1 className="text-4xl font-bold">Login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
