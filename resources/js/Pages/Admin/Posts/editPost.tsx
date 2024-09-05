import { BackButton, SaveButton } from '@/Components/Admin/Buttons';
import {
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardHeaderContent,
} from '@/Components/Admin/Card';
import FlashMessage from '@/Components/Admin/FlashMessage';
import {
  BreadCrumbTop,
  HeaderContent,
  TitleTop,
} from '@/Components/Admin/PageTop';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router, useForm, usePage } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';
import { IoDocumentTextSharp } from 'react-icons/io5';
import Select from 'react-select';

interface PostProps {
  title: string;
  summary: string;
  content: string;
  category_id: any;
  featured: any;
  active: boolean;
  social: boolean;
  url: string;
  linked: boolean;
  type: number;
}

const editPost = ({ post, categories, postCategory }: any) => {
  const editorRef = useRef<any>();
  const { flash } = usePage().props;

  const categoryDefault = postCategory.map((cat: any) => ({
    value: cat.id,
    label: cat.name,
  }));
  const options = categories.map((cat: any) => ({
    value: cat.id,
    label: cat.name,
  }));

  const {
    data,
    setData,
    patch,
    processing,
    errors,
  } = useForm({
    title: post.title,
    summary: post.summary,
    content: post.content,
    category_id: [],
    featured: post.featured,
    active: post.active,
    social: post.social,
    url: post.url,
    linked: post.linked,
    type: post.type,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    router.post(`/admin/posts/${post.id}`, {
      _method: 'put',
      title: data.title,
      summary: data.summary,
      content: data.content,
      category_id: data.category_id,
      featured: data.featured,
      active: data.active,
      social: data.social,
      url: data.url,
      linked: data.linked,
      type: data.type,
    });
  }

  const handleChange = (selected: any) => {
    setData(
      'category_id',
      selected.map((v: any) => v.value)
    );
  };

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoDocumentTextSharp size={30} />
            <span className="ml-2">Postagens</span>
          </TitleTop>
          <BreadCrumbTop
            links={[
              { url: route('posts.index'), label: 'Postagens' },
              { url: null, label: 'Editar postagem' },
            ]}
          />
        </HeaderContent>
        <CardContainer>
          <FlashMessage message={flash} />
          <CardHeader>
            <CardHeaderContent>
              <BackButton url={route('posts.index')} label={'Voltar'} />
            </CardHeaderContent>
            <CardHeaderContent>
              <></>
            </CardHeaderContent>
          </CardHeader>
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardBody className=" border-y border-gray-100">
              <div className="mt-4 px-3 my-4">
                <div className="flex flex-col">
                  <label className="label-form" htmlFor="title">
                    Título
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="input-form"
                  />
                  {errors.title && (
                    <div className="text-red-500">{errors.title}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="summary">
                    Descrição
                  </label>
                  <textarea
                    id="summary"
                    value={data.summary}
                    onChange={e => setData('summary', e.target.value)}
                    className="input-form"
                  ></textarea>
                  {errors.summary && (
                    <div className="text-red-500">{errors.summary}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="content">
                    Conteúdo
                  </label>
                  <Editor
                    apiKey="7sutxbbo4bpajl4d3vp8gajm3x9y26c1g6ruq3mngukohyb1"
                    onInit={(evt, editor: any) => (editorRef.current = editor)}
                    initialValue={data.content}
                    onChange={() =>
                      setData('content', editorRef.current?.getContent())
                    }
                    id="content"
                    init={{
                      language: 'pt_BR',
                      height: 300,
                      menubar: false,
                      plugins:
                        'autolink lists link charmap print preview anchor image',
                      toolbar:
                        'undo redo h1 h2 link bold italic image alignleft aligncenter alignright alignjustify  bullist numlist outdent indent',
                    }}
                  />
                  {errors.content && (
                    <div className="text-red-500">{errors.content}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="featured">
                    Imagem destacada
                  </label>
                  <input
                    id="featured"
                    type="file"
                    onChange={(e:any) => setData('featured', e.target.files[0])}
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
                  <label className="label-form" htmlFor="title">
                    Categorias
                  </label>
                  <Select
                    options={options}
                    isMulti
                    defaultValue={categoryDefault}
                    onChange={handleChange}
                    placeholder="Selecione a(s) categoria(s)"
                    styles={{
                      multiValueLabel: base => ({
                        ...base,
                        backgroundColor: '#00AEEF',
                        color: 'white',
                      }),
                    }}
                  />
                  {errors.category_id && (
                    <div className="text-red-500">{errors.category_id}</div>
                  )}
                </div>
                
                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="url">
                    URL externa
                  </label>
                  <input
                    id="url"
                    type="text"
                    value={data.url}
                    onChange={e => setData('url', e.target.value)}
                    className="input-form placeholder:text-gray-400"
                    placeholder="https://minhaurl.com.br"
                  />
                  {errors.url && (
                    <div className="text-red-500">{errors.url}</div>
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
                    Ativar postagem
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="linked"
                    checked={data.linked}
                    onChange={e => setData('linked', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="linked">
                    Abrir em outra página
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="social"
                    checked={data.social}
                    onChange={e => setData('social', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="social">
                    Botões redes sociais
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

export default editPost;
