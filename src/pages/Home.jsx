import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Welcome to T-Bone's BBQ</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Delicious BBQ dishes just a few clicks away!</p>
            <img src="/Home Page.png" alt="Home Page" className="w-full max-w-4xl mx-auto" />
        </div>
    );
};

export default Home;
