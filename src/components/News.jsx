import React, { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "BOOK YOUR VVIP SOFA ON THE SPOT",
    content:
      "Elevate your ultimate festival experience by booking your VVIP Sofa. Contact us at ...",
    image: "https://via.placeholder.com/300", // Ganti dengan URL gambar
  },
  {
    id: 2,
    title: "Orchestra E-VOUCHER EXCHANGE GUIDELINE",
    content:
      "IMPORTANT: Exchange your e-vouchers before D-Day of the event. Visit ...",
    image: "https://via.placeholder.com/300", // Ganti dengan URL gambar
  },
  {
    id: 3,
    title: "#orchestra TICKET UPGRADES ARE AVAILABLE",
    content:
      "#DWP24 is about creating lasting memories, and upgrading your tickets can enhance your experience. Learn more ...",
    image: "https://via.placeholder.com/300", // Ganti dengan URL gambar
  },
];

export const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="bg-black min-h-screen px-5 py-[150px]">
      <h1 className="text-center text-white text-3xl mb-8">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-white cursor-pointer hover:scale-105 transform transition max-w-sm mx-auto"
            onClick={() => setSelectedNews(news)}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{news.title}</h2>
              <p className="text-sm text-gray-400">
                {news.content.substring(0, 50)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-lg max-w-lg w-full p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>
            <p className="mb-6">{selectedNews.content}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
