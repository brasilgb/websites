import React, { Fragment, useMemo } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { IoChevronForwardOutline, IoLocate, IoLocateOutline, IoLocation, IoLogoWhatsapp, IoMail, IoPin, IoPinOutline } from 'react-icons/io5';
import ContactsForm from '@/Components/site/Contacts';
import { FaPhone } from 'react-icons/fa6';
import { Parser } from "html-to-react";
import HeaderSection from "@/Components/site/HeaderSection";

const Posts = ({ posts, imagefeatured }: any) => {
  const { datasite } = usePage().props as any;
  const { url } = usePage();

  return (
    <GuestLayout>
      <Head>
        <title>{posts?.title}</title>
      </Head>
      <div className="relative h-60 w-full">
        <img
          src={`/storage/uploads/${url.split('/')[1] === 'servicos' ? imagefeatured : posts?.featured}`}
          alt=""
          className="object-cover object-center w-full h-full"
        />
        {/* title and breadcumb */}
        <div className="absolute bg-gray-700/60 w-full bottom-0 text-gray-50 md:px-0 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-left text-red-um py-4">
              <span className="drop-shadow">{posts.title}</span>
            </h1>
            <div className="container m-auto">
              <ul className="flex items-center justify-start gap-1 text-base font-medium">
                <li>
                  <Link
                    className="text-gray-300 hover:text-gray-600"
                    href="/"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  /
                </li>
                <li>
                  {url.split('/')[2]
                    ? <Link
                      className="text-gray-300 hover:text-gray-600"
                      href={`/${url.split('/')[1]}`}
                    >
                      <span>{url.split('/')[1]}</span>
                    </Link>
                    : <span>{url.split('/')[1]}</span>
                  }
                </li>
                {url.split('/')[2] &&
                  <>
                    <li>
                      /
                    </li>
                    <li>
                      {url.split('/')[3]
                        ? <Link
                          className="text-gray-300 hover:text-gray-600"
                          href={`/${url.split('/')[1]}/${url.split('/')[2]}`}
                        >
                          <span>{url.split('/')[2]}</span>
                        </Link>
                        : <span className="text-gray-50">{url.split('/')[2]}</span>
                      }
                    </li>
                  </>
                }
                {url.split('/')[3] &&
                  <>
                    <li>
                      /
                    </li>
                    <li>
                      <span className="text-gray-50">{url.split('/')[3]}</span>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-10">
        <div className='container mx-auto'>
          <div className="px-4">
            <HeaderSection title={posts.title} />
            {Parser().parse(posts?.summary)}
            <div dangerouslySetInnerHTML={{ __html: posts?.content }} />
          </div>

          {posts.slug === 'contatos' &&
            <div className="px-6 py-12">
              <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 p-4 py-6 rounded-md shadow-md bg-gray-50 border-2 border-white md:p-8">
                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <IoMail size={22} />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800">E-mail</h2>
                    <p className="mt-2 text-sm text-gray-500">Entre em contato pelo nosso e-mail.</p>
                    <p className="mt-2 text-sm text-blue-500">{datasite?.config?.email}</p>
                  </div>
                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <IoLogoWhatsapp size={22} />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800">Whatsapp</h2>
                    <p className="mt-2 text-sm text-gray-500">Converse com nossa equipe.</p>
                    <p className="mt-2 text-sm text-blue-500">
                      <a href={`https://api.whatsapp.com/send?phone=${datasite?.config?.whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`}>
                        Começar conversa agora
                      </a>
                    </p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <IoLocation size={22} />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800">Loja</h2>
                    <p className="mt-2 text-sm text-gray-500">{datasite?.config?.opening}</p>
                    <p className="mt-2 text-sm text-blue-500">{datasite?.config?.city} - {datasite?.config?.address}</p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                      <FaPhone size={22} />
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800">Telefone</h2>
                    <p className="mt-2 text-sm text-gray-500">Se preferir ligue-nos.</p>
                    <p className="mt-2 text-sm text-blue-500">{datasite?.config?.phone}</p>
                  </div>
                </div>

                <div className="p-4 py-6 rounded-md shadow-md border-2 bg-gray-50 border-white md:p-8">
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