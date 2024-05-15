const ErrorPage = () => {
  return (
    <div>
      <div></div>
      <div className="h-screen flex flex-col justify-center items-center">
        <img
          src="https://i.ibb.co/PMMNnjw/error-6482984-1280.png"
          className="max-w-72 mx-auto"
          alt=""
        />
        <div className="text-center">
          <p className="text-3xl font-bold text-red-600">Page Not Found !!</p>
          <p className="mt-1 text-lg font-medium">You are wrong address</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
