import React, { Fragment } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import { IoChevronForwardOutline } from 'react-icons/io5';

const Posts = ({ posts }: any) => {
  return (
    <GuestLayout>
      <div className="relative h-60 w-full">
        <img
          src={`/storage/uploads/${posts.featured}`}
          alt=""
          className="object-cover object-center w-full h-full"
        />
        {/* title and breadcumb */}
        <div className="absolute bg-gray-700 bg-opacity-60 w-full bottom-0 text-gray-50">
          <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-left text-red-um py-4">
            <span className="drop-shadow">{posts.title}</span>
          </h1>
          <div className="container m-auto">
            <ul className="py-2 flex items-center justify-start">
              <li>
                <Link
                  className="text-base font-medium hover:text-gray-600"
                  href="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-base text-blue-quatro mx-1">
                <IoChevronForwardOutline size={16} />
              </li>
              <li className="text-base text-blue-quatro">
                <span>{posts.title}</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      <section className="md:w-4/6 mx-auto mt-10 py-4 px-4">
        <h5 className="text-center text-2xl font-bold pb-4 uppercase text-blue-700 drop-shadow-md">
          {posts.summary}
        </h5>
        <div dangerouslySetInnerHTML={{ __html: posts?.content }} />
      </section>
    </GuestLayout>
  );
};

export default Posts;
