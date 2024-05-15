const Footer = () => {
  return (
    <footer className="footer p-10 mt-12 mb-3 rounded-t-xl bg-neutral text-neutral-content">
      <aside>
        <div className="w-16 h-16 ">
        <img 
        src="https://i.ibb.co/JzX4St3/post-office-1019869-1280.jpg" 
        className="rounded-xl"
        alt="" />
        </div>
        <p className="text-2xl font-bold">
        PostForum
        </p>
        <p>
        Providing reliable tech since 1992
        </p>
        <p className="text-lg">Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social Link</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <div className="h-6 w-6 ">
                <a href="">
                <img src="https://i.ibb.co/rsKQ764/linkedin-7509708-1280.png" alt="" />
                </a>
            </div>
          </a>
          <a href="https://www.facebook.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
