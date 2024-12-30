import React from 'react'



const musisiData = [
    {
        id: 1,
        nama: 'Devin Bagas Pratama',
        alat: 'Triangle',
        gambar: 'https://via.placeholder.com/200', // Ganti dengan URL gambar yang sesuai
        suka: 69,
    },
    {
        id: 2,
        nama: 'Marini',
        alat: 'Flute',
        gambar: 'https://via.placeholder.com/200',
        suka: 64,
    },
    {
        id: 3,
        nama: 'Metta F. Ariono',
        alat: 'Flute',
        gambar: 'https://via.placeholder.com/200',
        suka: 66,
    },
    {
        id: 4,
        nama: 'Michelle Siswanto',
        alat: 'Biola',
        gambar: 'https://via.placeholder.com/200',
        suka: 65,
    },
    {
        id: 5,
        nama: 'Nama Lain',
        alat: 'Cello',
        gambar: 'https://via.placeholder.com/200',
        suka: 45,
    },
];

export const Musisi = () => {
    return (
        <div className="bg-black min-h-screen py-[150px] px-5">
            <h1 className="text-center text-white text-3xl mb-8">Musisi</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {musisiData.map((musisi) => (
                    <div
                        key={musisi.id}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-white"
                    >
                        <img
                            src={musisi.gambar}
                            alt={`${musisi.nama} - ${musisi.alat}`}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{musisi.nama}</h2>
                            <p className="text-sm text-gray-400">{musisi.alat}</p>
                        </div>
                        <div className="flex justify-between items-center p-4 border-t border-gray-700">
                            <button className="text-gray-400 hover:text-red-500">
                                ❤️ {musisi.suka}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Musisi;
