

const Blogs = () => {

    return (
        <>
        {/* 1 */}
        <div className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-600">Jun 1, 2020</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50">Javascript</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">What is an access token and refresh token? How do they work and where should
                    we store them on the client side?</a>
                    <p className="mt-2">Access tokens and refresh tokens are essential components of authentication systems, particularly in OAuth 2.0. Access tokens, which are short-lived, are used to authenticate and authorize access to protected resources, while refresh tokens, which are long-lived, allow the client to obtain new access tokens without requiring the user to re-authenticate. On the client side, access tokens should be stored in memory or short-lived storage like sessionStorage to reduce security risks, whereas refresh tokens should be stored in more secure, long-term storage, such as HTTP-only cookies, to protect them from cross-site scripting (XSS) attacks. Best practices include using HTTPS, employing secure storage mechanisms, regularly rotating tokens, and issuing tokens with minimal necessary permissions to enhance security.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" className="hover:underline dark:text-violet-600">Read more</a>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* 2 */}
        <div className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-600">Jun 7, 2023</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50">Javascript</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">What is express js? What is Nest JS?</a>
                    <p className="mt-2">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the development process by offering middleware for handling requests and responses, a powerful routing mechanism, and an extensive ecosystem of plugins. On the other hand, NestJS is a progressive Node.js framework built with TypeScript, designed to create efficient, reliable, and scalable server-side applications. It promotes a modular architecture and uses a powerful dependency injection system, making it suitable for developing complex applications with a structured and maintainable codebase. NestJS combines the flexibility of Express with additional features and a more organized approach, catering to developers who prefer TypeScript and a more opinionated framework.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" className="hover:underline dark:text-violet-600">Read more</a>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img referrerPolicy="no-referrer" src="https://lh3.googleusercontent.com/a/ACg8ocIdi-ZIj8ZyDEtQWZAO1H8Y5jWzMHoRlLtnk0y0q-WfFqKj_Sk=s96-c" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600">Nadim Mahmud</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* 3 */}
        <div className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-600">Jun 7, 2023</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50">Javascript</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">Explain Indeed Lite Website technology and code?</a>
                    <p className="mt-2">Our web application is built with React for a dynamic user interface, styled with Tailwind CSS and DaisyUI for a sleek and responsive design. The backend, powered by Node.js and Express.js, ensures robust and efficient server-side operations. By leveraging modern React libraries, we provide a fast, engaging, and high-quality user experience with a seamless integration of frontend and backend technologies.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" className="hover:underline dark:text-violet-600">Read more</a>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img referrerPolicy="no-referrer" src="https://lh3.googleusercontent.com/a/ACg8ocIdi-ZIj8ZyDEtQWZAO1H8Y5jWzMHoRlLtnk0y0q-WfFqKj_Sk=s96-c" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600">Nadim Mahmud</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blogs;