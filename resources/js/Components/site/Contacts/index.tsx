
const ContactsForm = () => {
  
  return (
    <form>
      <div className="-mx-2 md:items-center md:flex">
        <div className="flex-1 px-2">
          <label className="block mb-2 text-sm text-gray-600">Nome</label>
          <input type="text" placeholder="" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-600">E-mail</label>
        <input type="email" placeholder="" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
      </div>

      <div className="w-full mt-4">
        <label className="block mb-2 text-sm text-gray-600">Mensagem</label>
        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder=""></textarea>
      </div>

      <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Enviar mensagem
      </button>
    </form>

  )
}

export default ContactsForm