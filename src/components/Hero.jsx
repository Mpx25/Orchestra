import React from 'react';
import Background from './Background';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import default Swiper styles
import "swiper/css/navigation"; // If you want navigation (arrows)
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Swiper modules
import { useNavigate } from "react-router-dom";

// Import images for the slider and background
import Photo1 from "../assets/Orchestra.jpg";
import Photo2 from "../assets/Pperformance.jpg";
import Photo3 from "../assets/performance.jpg";
import BackgroundImage from "../assets/io.jpg";
import Logo from "../assets/logo.png"

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='text-[#C1BAA1]'>
      <div className='relative'>
        <Background />
      </div>

      {/* Slider with content */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="relative z-10 w-full h-[500px] md:h-[600px] mt-16"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center max-w-[1240px] mx-auto w-full">
              {/* Image Section */}
              <div className="flex-1">
                <img src={Photo1} alt="Orchestra" className="w-full h-full object-cover" />
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mt-4">
                  HARMONY FOR UNITY
                </h1>
                <p className="text-lg md:text-2xl mt-4 text-[#E38E49]">
                  12 Oktober 2024
                </p>
                <p className="text-base md:text-xl mt-2">
                  Konser Pra-Tur Austria-Italia
                </p>
                <button className="mt-6 px-6 py-3 bg-[#E38E49] text-white font-bold uppercase rounded"
                  onClick={() => navigate("/berita")}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center max-w-[1240px] mx-auto w-full">
              {/* Image Section */}
              <div className="flex-1">
                <img src={Photo2} alt="Concert" className="w-full h-full object-cover" />
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mt-4">
                  CLASSICAL MEETS MODERN
                </h1>
                <p className="text-lg md:text-2xl mt-4 text-[#E38E49]">
                  Explore the Magic of Music
                </p>
                <button className="mt-6 px-6 py-3 bg-[#E38E49] text-white font-bold uppercase rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center max-w-[1240px] mx-auto w-full">
              {/* Image Section */}
              <div className="flex-1">
                <img src={Photo3} alt="Performance" className="w-full h-full object-cover" />
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mt-4">
                  MUSIC THAT INSPIRES
                </h1>
                <p className="text-lg md:text-2xl mt-4 text-[#E38E49]">
                  Join the Movement
                </p>
                <button className="mt-6 px-6 py-3 bg-[#E38E49] text-white font-bold uppercase rounded">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Background Image Text Section Below Swiper */}
      <div
        className="relative py-20 text-center text-white h-[500px]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Join us in an unforgettable musical journey
        </h2>
        <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto pt-[100px]">
          "Tidak peduli siapa kita, tidak peduli bagaimana keadaan kita,
          perasaan dan emosi kita bersifat universal. Musik selalu menjadi
          cara yang bagus untuk membuat orang sadar akan hubungan itu. Ini dapat
          membantu Anda membuka sebagian dari diri Anda dan mengekspresikan
          perasaan yang sebelumnya tidak Anda rasakan"
        </p>
      </div>

      {/* Card Section Below Background */}
      <div className="py-24 mt-10">
        <h2 className="text-3xl font-bold text-center text-[#F0BB78] mb-10">
          Our Inspirate Classical Musicians Composer
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={20} // Jarak antar card
          slidesPerView={1} // Default jumlah card per slide
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 card untuk layar kecil
            768: { slidesPerView: 2 }, // 2 card untuk tablet
            1024: { slidesPerView: 3 }, // 3 card untuk desktop
            1060: { slidesPerView: 4 }, // 4 card untuk desktop lebar
            1090: { slidesPerView: 5 }, // 5 card untuk desktop lebar
            1100: { slidesPerView: 6 }
          }}
          className="container mx-auto"
        >
          {/* Card Items */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYsDrEeOCpbNJM46BQhVHxCi6vkPjG9p-3Tm8o8zQZyUs216E44TFX8JvTaxG14b4FqDjDV97VErHRkuSfKDOIq7KD11DgPR-ca-HOww"
                alt="Musician 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Wolfgang A Mozart</h3>
                <p className="text-gray-600 mt-2 text-center">Classical Era Composer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://66.media.tumblr.com/f474afd4f0c6bb499bda4692411bf4c4/tumblr_o1hiw2sY3u1v2raedo2_r1_1280.jpg"
                alt="Musician 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Ludwig van Beethoven</h3>
                <p className="text-gray-600 mt-2 text-center">Romantic Era Composer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://pianonotes.piano4u.com/wp-content/uploads/2016/03/frederic-chopin-02-761x1024.jpg"
                alt="Musician 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center"> Frederic Chopin</h3>
                <p className="text-gray-600 mt-2 text-center">Romantic Piano Virtuoso</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.oanVbqtbrt4DBYsgy74dhAHaJQ?rs=1&pid=ImgDetMain"
                alt="Musician 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Robert Schumann</h3>
                <p className="text-gray-600 mt-2 text-center">Romantic Piano Virtuoso</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.VTisWuW9PsON90vczbYIAwHaHP?rs=1&pid=ImgDetMain"
                alt="Musician 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Giuseppe Verdi</h3>
                <p className="text-gray-600 mt-2 text-center">Romantic Era Composer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.B3vvNO8xqtYXQfgoi0gfMAHaHa?rs=1&pid=ImgDetMain"
                alt="Musician 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Richard Wagner</h3>
                <p className="text-gray-600 mt-2 text-center">Romantic Era Composer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Video Performa */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-[#F0BB78] mb-10">
          Performance Highlights
        </h2>
        <div className="container mx-auto px-4">
          <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/63OT3_Lfy50?start=181"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Performance Video"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="relative bg-gradient-to-r from-[#101d33] to-[#59779e] p-8 rounded-lg max-w-5xl mx-auto shadow-lg">
          {/* Gambar */}
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={Logo}
              alt="Ticket Benefits"
              className="h-[550px] w-full mx-[150px] md:w-1/3 rounded-lg object-cover mb-6 md:mb-0 md:mr-6"
            />
            {/* Konten */}
            <div className="text-white md:w-2/3 mx-11">
              <h3 className="text-2xl font-bold mb-4">Get Your Ticket Now!</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access to all event performances</li>
                <li>Meet-and-greet with musicians</li>
                <li>Exclusive concert merchandise</li>
                <li>Special seating options</li>
                <li>Memorable photo opportunities</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-white text-[#E38E49] font-bold uppercase rounded"
                onClick={() => navigate("/konser")}
              >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-full"
        style={{ zIndex: 1 }}
      >
        <div className="relative mt-2 w-full max-w-4xl p-5">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/1iFbvD1Kmto3GDHUkVzH3t?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default Hero;
