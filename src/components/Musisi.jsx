import React, { useState, useEffect } from 'react';

export const Musisi = () => {
    const [musisiData, setMusisiData] = useState([]);
    const [formData, setFormData] = useState({ nama: '', alat: '', gambar: '', suka: 0 });
    const [isEditing, setIsEditing] = useState(null); // Menyimpan id musisi yang sedang diedit

    // Muat data dari server saat komponen pertama kali di-render
    useEffect(() => {
        fetch('http://localhost:5000/musisi') // Pastikan endpoint ini sesuai dengan backend Anda
            .then((response) => response.json())
            .then((data) => {
                setMusisiData(data);
            })
            .catch((error) => console.error('Error loading data:', error));
    }, []);

    // Fungsi untuk menambahkan musisi
    const addMusisi = (event) => {
        event.preventDefault();
        const newMusisi = {
            id: musisiData.length ? musisiData[musisiData.length - 1].id + 1 : 1,
            ...formData,
        };
        fetch('http://localhost:5000/musisi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMusisi),
        })
        .then((response) => response.json())
        .then((data) => {
            setMusisiData((prevData) => [...prevData, data]);
            setFormData({ nama: '', alat: '', gambar: '', suka: 0 });
        })
        .catch((error) => console.error('Error adding musisi:', error));
    };

    // Fungsi untuk mengedit musisi
    const editMusisi = (id, updatedData) => {
        fetch(`http://localhost:5000/musisi/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        })
        .then((response) => response.json())
        .then((data) => {
            setMusisiData((prevData) =>
                prevData.map((musisi) =>
                    musisi.id === id ? { ...musisi, ...data } : musisi
                )
            );
        })
        .catch((error) => console.error('Error updating musisi:', error));
    };

    // Fungsi untuk menghapus musisi
    const deleteMusisi = (id) => {
        fetch(`http://localhost:5000/musisi/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setMusisiData((prevData) => prevData.filter((musisi) => musisi.id !== id));
        })
        .catch((error) => console.error('Error deleting musisi:', error));
    };

    return (
        <div className="bg-black min-h-screen py-[100px] px-4 sm:px-6 md:px-8 lg:px-20">
            <h1 className="text-center text-white text-3xl mb-8">Musisi</h1>

            <form onSubmit={addMusisi} className="mb-6 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Nama"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="p-2 rounded border flex-1 h-[50px]"
                />
                <input
                    type="text"
                    placeholder="Alat Musik"
                    value={formData.alat}
                    onChange={(e) => setFormData({ ...formData, alat: e.target.value })}
                    className="p-2 rounded border flex-1"
                />
                <input
                    type="text"
                    placeholder="Gambar URL"
                    value={formData.gambar}
                    onChange={(e) => setFormData({ ...formData, gambar: e.target.value })}
                    className="p-2 rounded border flex-1"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4 sm:mt-0 sm:w-auto"
                >
                    Tambah
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {musisiData.map((musisi) => (
                    <div key={musisi.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-white">
                        <img
                            src={musisi.gambar}
                            alt={musisi.nama}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            {isEditing === musisi.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={musisi.nama}
                                        onChange={(e) =>
                                            setMusisiData(
                                                musisiData.map((item) =>
                                                    item.id === musisi.id
                                                        ? { ...item, nama: e.target.value }
                                                        : item
                                                )
                                            )
                                        }
                                        className="p-2 rounded mb-2 w-full text-gray-900"
                                    />
                                    <input
                                        type="text"
                                        value={musisi.alat}
                                        onChange={(e) =>
                                            setMusisiData(
                                                musisiData.map((item) =>
                                                    item.id === musisi.id
                                                        ? { ...item, alat: e.target.value }
                                                        : item
                                                )
                                            )
                                        }
                                        className="p-2 rounded mb-2 w-full text-gray-900"
                                    />
                                    <button
                                        onClick={() => {
                                            editMusisi(musisi.id, {
                                                nama: musisi.nama,
                                                alat: musisi.alat,
                                            });
                                            setIsEditing(null);
                                        }}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Simpan
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-lg font-semibold">{musisi.nama}</h2>
                                    <p className="text-sm text-gray-400">{musisi.alat}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between items-center p-4 border-t border-gray-700">
                            <button
                                onClick={() => deleteMusisi(musisi.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Hapus
                            </button>
                            <button
                                onClick={() => setIsEditing(isEditing === musisi.id ? null : musisi.id)}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                {isEditing === musisi.id ? "Batal" : "Edit"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Musisi;
