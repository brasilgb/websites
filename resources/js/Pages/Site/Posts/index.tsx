import React, { Fragment, useMemo } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { IoChevronForwardOutline, IoLocate, IoLocateOutline, IoLocation, IoLogoWhatsapp, IoMail, IoPin, IoPinOutline } from 'react-icons/io5';
import ContactsForm from '@/Components/site/Contacts';
import { FaPhone } from 'react-icons/fa6';
import { Parser } from "html-to-react";
import HeaderSection from "@/Components/site/HeaderSection";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Posts = ({ posts, imagefeatured }: any) => {
  const { datasite } = usePage().props as any;
  const { url } = usePage();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCv7Y9J8V772X8Mx774H_ygRT7Nl6lWZUU",
  });
  const coordinates = datasite?.config?.maps.split(',');

  const center = useMemo(() => ({ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }), []); //-29.47119710476353, -51.809435289709754
  const customMarker = {
    path: "M4.87617 3.75H19.1238L21 8.86683V10.5C21 11.2516 20.7177 11.9465 20.25 12.4667V21H3.75V12.4667C3.28234 11.9465 3 11.2516 3 10.5V8.86683L4.87617 3.75ZM18.1875 13.3929C18.3807 13.3929 18.5688 13.3731 18.75 13.3355V19.5H15V15H9L9 19.5H5.25V13.3355C5.43122 13.3731 5.61926 13.3929 5.8125 13.3929C6.63629 13.3929 7.36559 13.0334 7.875 12.4667C8.38441 13.0334 9.11371 13.3929 9.9375 13.3929C10.7613 13.3929 11.4906 13.0334 12 12.4667C12.5094 13.0334 13.2387 13.3929 14.0625 13.3929C14.8863 13.3929 15.6156 13.0334 16.125 12.4667C16.6344 13.0334 17.3637 13.3929 18.1875 13.3929ZM10.5 19.5H13.5V16.5H10.5L10.5 19.5ZM19.5 9.75V10.5C19.5 11.2965 18.8856 11.8929 18.1875 11.8929C17.4894 11.8929 16.875 11.2965 16.875 10.5V9.75H19.5ZM19.1762 8.25L18.0762 5.25H5.92383L4.82383 8.25H19.1762ZM4.5 9.75V10.5C4.5 11.2965 5.11439 11.8929 5.8125 11.8929C6.51061 11.8929 7.125 11.2965 7.125 10.5V9.75H4.5ZM8.625 9.75V10.5C8.625 11.2965 9.23939 11.8929 9.9375 11.8929C10.6356 11.8929 11.25 11.2965 11.25 10.5V9.75H8.625ZM12.75 9.75V10.5C12.75 11.2965 13.3644 11.8929 14.0625 11.8929C14.7606 11.8929 15.375 11.2965 15.375 10.5V9.75H12.75Z",
    fillColor: '#BD0454',
    fillOpacity: .9,
    // anchor: new google.maps.Point(0,0),
    strokeWeight: 0,
    scale: 2
  };
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
          <div className="px-4 text-base text-gray-600">
            <HeaderSection title={posts.title} />
            {/* {Parser().parse(posts?.summary)} */}
            <div className="styles-timynce" dangerouslySetInnerHTML={{ __html: posts?.content }} />
          </div>

          {posts.slug === 'contatos' &&
            <div className="px-6 py-6">
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

              <div className="md:h-96 h-40 p-2 rounded-md shadow-md border-2 bg-gray-50 border-white md:p-4 mt-6">
                {!isLoaded ? (
                  <h1>Loading...</h1>
                ) : (
                  <GoogleMap
                    mapContainerClassName="h-full w-full"
                    center={center}
                    zoom={18}
                  >
                    <Marker
                      position={{ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }}
                      icon={customMarker}
                    />
                  </GoogleMap>
                )}
              </div>

            </div>
          }
        </div>
      </section>
    </GuestLayout>
  );
};

export default Posts;