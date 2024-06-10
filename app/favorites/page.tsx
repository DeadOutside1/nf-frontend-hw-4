import React from 'react';

const SavedSearches = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Избранные результаты поиска</h1>
      <div className="flex justify-around border-b mb-4">
        <button className="py-2 px-4 text-gray-600 border-b-2 border-transparent hover:border-gray-400 focus:outline-none focus:border-black">
          Избранные объявления (0/150)
        </button>
        <button className="py-2 px-4 text-gray-600 border-b-2 border-black focus:outline-none">
          Сохраненные поиски (0/50)
        </button>
        <button className="py-2 px-4 text-gray-600 border-b-2 border-transparent hover:border-gray-400 focus:outline-none">
          Недавно просмотренные
        </button>
      </div>
      <div className="text-center mt-16">
        <img
          src="/path-to-your-image.png"
          alt="Placeholder"
          className="mx-auto mb-4"
        />
        <h2 className="text-lg font-bold mb-2">
          Ищете что-то особенное? Сохраните параметры поиска.
        </h2>
        <p className="text-gray-600">
          Здесь будут появляться объявления, которые соответствуют сохраненным параметрам поиска.
        </p>
      </div>
    </div>
  );
};

export default SavedSearches;
