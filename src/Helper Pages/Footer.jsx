const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-violet-800">
            <div className="max-w-screen-xl mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                    <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <img
                            src="https://res.cloudinary.com/dnkhpkpy4/image/upload/v1732113691/Frame_4_dueadi.png"
                            alt="Freescle Logo"
                            className="h-8 w-8"
                        />
                        <span className="text-xl font-semibold dark:text-white">Freescle</span>
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Freescle. All Rights Reserved.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex space-x-6 rtl:space-x-reverse mt-3 md:mt-0">
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                        aria-label="Facebook"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22 12a10 10 0 1 0-11.32 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12z"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                        aria-label="Twitter"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23 3a10.55 10.55 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.11-.9-2-2-2s-2 .89-2 2v4.5h-3v-9h3v1.08c.88-.62 2.15-1.08 3.5-1.08 2.49 0 4.5 2.01 4.5 4.5v4.5z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
