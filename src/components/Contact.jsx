import React, { useState } from 'react';
import Logo from "../assets/logo.png";

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const faqs = [
    {
      title: "What is an orchestra?",
      description: "An orchestra is a large ensemble of musicians who play various instruments, typically including strings, woodwinds, brass, and percussion. They perform classical music and other genres under the direction of a conductor."
    },
    {
      title: "What instruments are part of an orchestra?",
      description: "Orchestras consist of four main sections: strings (violins, violas, cellos), woodwinds (flutes, oboes, clarinets), brass (trumpets, trombones, tubas), and percussion (drums, cymbals, timpani). Some orchestras also include a keyboard section (piano, harpsichord)."
    },
    {
      title: "What is a conductor's role?",
      description: "The conductor is responsible for leading the orchestra, ensuring all musicians play in sync, and interpreting the music. The conductor sets the tempo, guides the musicians through dynamic changes, and brings out the emotional expression of the piece."
    },
    {
      title: "What types of music do orchestras perform?",
      description: "Orchestras primarily perform classical music, including symphonies, concertos, and operas. However, many orchestras also perform contemporary works, film scores, and sometimes even pop or jazz music."
    },
    {
      title: "How do I buy tickets for an orchestra performance?",
      description: "Tickets for orchestra performances can usually be purchased through the orchestra's website, at ticket booths, or through various online ticket platforms. Be sure to check the concert schedule and availability."
    },
    {
      title: "What is the best way to prepare for an orchestra concert?",
      description: "To fully enjoy an orchestra concert, it's helpful to familiarize yourself with the program beforehand. Some people also enjoy reading about the composer or the specific piece being performed to deepen their appreciation during the performance."
    }
  ];

  const handleOpenModal = (faq) => {
    setSelectedFAQ(faq);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFAQ(null);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <img 
        src={Logo} // Ganti dengan path logo Anda
        alt="Jakarta Concert Orchestra Logo" 
        className="mb-6 w-[300px] h-auto"
      />
      <h1 className="text-3xl font-bold font-popins text-[#E38E49] mb-4 tracking-widest text-center">
        CONCERT ORCHESTRA
      </h1>
      <p className="text-center max-w-2xl leading-relaxed text-gray-300 mb-8">
        <strong>Concert Orchestra</strong> atau disingkat <strong>CO</strong> 
        mengemban peran edukasi, dibentuk dengan tujuan untuk mengembangkan dan 
        meningkatkan apresiasi masyarakat akan musik klasik, membawa musik simfoni – 
        baik orkestra simfoni dan vokal simfoni lebih dekat kepada masyarakat dan 
        untuk menjadi media dalam memperkenalkan karya-karya komponis Indonesia.
      </p>
      
      {/* FAQ Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#E38E49]">FAQ Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-[#E38E49]">{faq.title}</h3>
              <p className="text-gray-300">{faq.description}</p>
              <button 
                className="mt-4 text-sm text-[#E38E49] hover:underline"
                onClick={() => handleOpenModal(faq)}
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h3 className="text-xl font-bold mb-4 text-[#E38E49]">{selectedFAQ?.title}</h3>
            <p className="text-gray-700 mb-4">{selectedFAQ?.description}</p>
            <button
              className="bg-[#E38E49] text-white py-2 px-6 rounded-lg hover:bg-[#D97F2D] transition"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
