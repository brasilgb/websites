import { AddButton, BackButton, SaveButton } from '@/Components/Admin/Buttons';
import {
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardHeaderContent,
} from '@/Components/Admin/Card';
import {
  BreadCrumbTop,
  HeaderContent,
  TitleTop,
} from '@/Components/Admin/PageTop';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { selectModule } from '@/Libs';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';
import { IoList } from 'react-icons/io5';

interface CategoryProps {
  name: string;
  description: string;
  featured: any;
  thumbnail: any;
  parent: string;
  module: string;
  active: boolean;
  menu: boolean;
  visiblehome: boolean;
}

const addCategory = ({ categories }: any) => {
  const { flash } = usePage().props;

  const {
    data,
    setData,
    post,
    processing,
    errors,
  } = useForm({
    name: '',
    description: '',
    featured: null,
    thumbnail: null,
    parent: '',
    module: '',
    active: false,
    menu: false,
    visiblehome: false,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route('categories.store'));
  }

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoList size={30} />
            <span className="ml-2">Categorias</span>
          </TitleTop>
          <BreadCrumbTop
            links={[
              { url: route('categories.index'), label: 'Categorias' },
              { url: null, label: 'Adicionar categoria' },
            ]}
          />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <BackButton url={route('categories.index')} label={'Voltar'} />
            </CardHeaderContent>
            <CardHeaderContent>
              <></>
            </CardHeaderContent>
          </CardHeader>
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardBody className=" border-y border-gray-100">
              <div className="mt-4 px-3 my-4">
                <div className="flex flex-col">
                  <label className="label-form" htmlFor="category">
                    Categoria
                  </label>
                  <input
                    id="category"
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="input-form"
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="descricao">
                    Descrição
                  </label>
                  <textarea
                    id="description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="input-form"
                  ></textarea>
                  {errors.description && (
                    <div className="text-red-500">{errors.description}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="thumbnail">
                  Thumbnail
                  </label>
                  <input
                    id="thumbnail"
                    type="file"
                    onChange={(e: any) => setData('thumbnail', e.target.files[0])}
                    className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                  />
                  {errors.thumbnail && (
                    <div className="text-red-500">{errors.thumbnail}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="featured">
                    Imagem destacada
                  </label>
                  <input
                    id="featured"
                    type="file"
                    onChange={(e: any) => setData('featured', e.target.files[0])}
                    className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                  />
                  {errors.featured && (
                    <div className="text-red-500">{errors.featured}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="parent">
                    Categoria pai
                  </label>
                  <select
                    name="parent"
                    id="parent"
                    value={data.parent}
                    onChange={e => setData('parent', e.target.value)}
                    className="input-form"
                  >
                    <option value=" ">Selecione uma categoria pai</option>
                    {categories.map((category: any) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="module">
                    Módulo
                  </label>
                  <select
                    name="module"
                    id="module"
                    value={data.module}
                    onChange={e => setData('module', e.target.value)}
                    className="input-form"
                  >
                    <option value=" ">Selecione o módulo</option>
                    {selectModule.map((mod: any) => (
                      <option key={mod.value} value={mod.value}>
                        {mod.label}
                      </option>
                    ))}
                  </select>
                  {errors.module && (
                    <div className="text-red-500">{errors.module}</div>
                  )}
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="active"
                    checked={data.active}
                    onChange={e => setData('active', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="active">
                    Ativar categoria
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="menu"
                    checked={data.menu}
                    onChange={e => setData('menu', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="menu">
                    Inserir no menu
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="visiblehome"
                    checked={data.visiblehome}
                    onChange={e => setData('visiblehome', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="visiblehome">
                    Somente página inicial
                  </label>
                </div>

              </div>
              <CardFooter className="border-t border-gray-100">
                <SaveButton processing={processing} />
              </CardFooter>
            </CardBody>
          </form>
        </CardContainer>
      </Card>
    </AuthenticatedLayout>
  );
};

export default addCategory;
