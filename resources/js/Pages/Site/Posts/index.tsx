import React, { Fragment } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { IoChevronForwardOutline, IoLocate, IoLocateOutline, IoLocation, IoLogoWhatsapp, IoMail, IoPin, IoPinOutline } from 'react-icons/io5';
import ContactsForm from '@/Components/site/Contacts';
import { FaPhone } from 'react-icons/fa6';
import { Parser } from "html-to-react";

const Posts = ({ posts }: any) => {
  const { conf } = usePage().props as any;

  return (
    <GuestLayout>
      <Head>
        <title>{posts.title}</title>
        <meta
          head-key="description"
          name="description"
          content="This is the default description"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="relative h-60 w-full">
        <img
          src={`/storage/uploads/${posts.featured}`}
          alt=""
          className="object-cover object-center w-full h-full"
        />
        {/* title and breadcumb */}
        <div className="absolute bg-gray-700 bg-opacity-60 w-full bottom-0 text-gray-50 md:px-0 px-4">
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

      <section className="bg-white py-10">
        <div className='container mx-auto'>
          <h5 className="text-center text-2xl font-bold pb-4 uppercase text-blue-700 drop-shadow-md">
            {posts.summary}
          </h5>
          {/* <div dangerouslySetInnerHTML={{ __html: posts?.content }} /> */}
          <div>
            {Parser().parse(posts?.content)}
          </div>
          {posts.slug === 'pag-contatos' &&
            <div className="px-6 py-12">
              <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <IoMail size={22} />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800">E-mail</h2>
                    <p className="mt-2 text-sm text-gray-500">Entre em contato pelo nosso e-mail.</p>
                    <p className="mt-2 text-sm text-blue-500">{conf[0].email}</p>
                  </div>
                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <IoLogoWhatsapp size={22} />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800">Whatsapp</h2>
                    <p className="mt-2 text-sm text-gray-500">Converse com nossa equipe.</p>
                    <p className="mt-2 text-sm text-blue-500">
                      <a href={`https://api.whatsapp.com/send?phone=${conf[0]?.whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`}>
                        Começar conversa agora
                      </a>
                    </p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <IoLocation size={22} />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800">Loja</h2>
                    <p className="mt-2 text-sm text-gray-500">{conf[0].opening}</p>
                    <p className="mt-2 text-sm text-blue-500">{conf[0].city} - {conf[0].address}</p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <FaPhone size={22} />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800">Telefone</h2>
                    <p className="mt-2 text-sm text-gray-500">Se preferir ligue-nos.</p>
                    <p className="mt-2 text-sm text-blue-500">{conf[0].phone}</p>
                  </div>
                </div>

                <div className="p-4 py-6 rounded-md shadow-md bg-gray-50 border border-white md:p-8">
                  <ContactsForm />
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </GuestLayout>
  );
};

export default Posts;
