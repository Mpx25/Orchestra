// import React from 'react';
// import io from '../assets/io.jpg'

// export const Bgimage = () => {
//   return (
//     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//         <button className="px-8 py-4 text-xl text-white bg-black bg-opacity-70 border-none rounded-lg cursor-pointer hover:bg-opacity-90">
//           Go to Page
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Bgimage;
import React from 'react';
import io from '../assets/io.jpg'; // Mengimpor gambar

export const Bgimage = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${io})` }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <button className="px-8 py-4 text-xl text-white bg-black bg-opacity-70 border-none rounded-lg cursor-pointer hover:bg-opacity-90">
          Go to Page
        </button>
      </div>
    </div>
  );
};

export default Bgimage;


