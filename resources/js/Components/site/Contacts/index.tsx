import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const ContactsForm = () => {
  const { flash } = usePage().props as any;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset
  } = useForm({
    name: '',
    email: '',
    message: ''
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route('sendmail'));
    reset();
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {flash.message &&
        <div className="bg-green-200 text-green-700 border border-green-500 py-2 px-3 rounded-md mb-2 flex items-center justify-start">
          <IoCheckmark size={22} /><span className="ml-2">{flash.message}</span>
        </div>
      }
      <div className="-mx-2 md:items-center md:flex">
        <div className="flex-1 px-2">
          <label className="block mb-2 text-sm text-gray-600">Nome</label>
          <input
            type="text"
            placeholder=""
            value={data.name}
            onChange={e => setData('name', e.target.value)}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <div className="text-red-500 text-xs">{errors.name}</div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-600">E-mail</label>
        <input
          type="email"
          placeholder=""
          value={data.email}
          onChange={e => setData('email', e.target.value)}
          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        {errors.email && (
          <div className="text-red-500 text-xs">{errors.email}</div>
        )}
      </div>

      <div className="w-full mt-4">
        <label className="block mb-2 text-sm text-gray-600">Mensagem</label>
        <textarea
          placeholder=""
          value={data.message}
          onChange={e => setData('message', e.target.value)}
          className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        ></textarea>
        {errors.message && (
          <div className="text-red-500 text-xs">{errors.message}</div>
        )}
      </div>

      <button
        className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        disabled={processing}
        type="submit"
      >
        Enviar mensagem
      </button>
    </form>

  )
}

export default ContactsForm