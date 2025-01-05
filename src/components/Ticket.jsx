import React, { useState, useEffect } from "react";

// Fallback data jika gagal memuat file JSON
const fallbackTickets = [
  {
    id: 1,
    name: "REGULER-SEAT",
    description: "Entry before 18.00 WIB",
    price: 1750000,
    eventTime: "18.00 WIB, 25 January 2025",
  },
  {
    id: 2,
    name: "General Admission",
    description: "Presale",
    price: 1900000,
    eventTime: "19.00 WIB, 25 January 2025",
  },
  {
    id: 3,
    name: "VIP",
    description: "Presale",
    price: 3950000,
    eventTime: "20.00 WIB, 25 January 2025",
  },
];

// Komponen Modal Konfirmasi Pembelian
const ConfirmationModal = ({ onClose, onConfirm }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Confirm Purchase</h3>
      <p className="text-gray-600 mb-4">
      Pembelian Anda tidak dapat dikembalikan. Apakah Anda ingin melanjutkan?
      </p>
      <div className="flex gap-4">
        <button
          onClick={onConfirm}
          className="bg-green-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Oke
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

// Komponen Modal untuk Info Tiket
const Modal = ({ ticket, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">{ticket.name}</h3>
      <p className="text-gray-600 mb-2">{ticket.description}</p>
      <p className="text-gray-800 font-bold mb-4">
        Event Time: {ticket.eventTime}
      </p>
      <button
        onClick={onClose}
        className="bg-red-500 text-white py-2 px-4 rounded-lg w-full"
      >
        Close
      </button>
    </div>
  </div>
);

// Komponen Kartu Tiket
const TicketCard = ({ ticket, onAddToCart, onCardClick, isInCart }) => (
  <div
    onClick={() => onCardClick(ticket)}
    className="flex flex-col items-center bg-[#1c1f4a] rounded-lg p-6 text-center shadow-lg text-white w-[500px] h-[500px] cursor-pointer hover:shadow-xl transition"
  >
    <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
    <p className="text-sm text-[#9fa3c4] mb-4">{ticket.description}</p>
    <p className=" flex flex-col text-lg mb-6 py-[100px]">
      Starts from{" "}
      <span className="font-bold text-white">
        IDR {Number(ticket.price || 0).toLocaleString()}
      </span>
    </p>
    <button
      onClick={(e) => {
        e.stopPropagation(); // Mencegah event bubbling agar modal tidak terbuka
        onAddToCart(ticket);
      }}
      className="py-2 px-6 rounded-lg bg-[#ff4500] hover:bg-[#ff5722] text-white transition"
    >
      {isInCart ? "Add More" : "Buy Tickets"}
    </button>
  </div>
);

// Komponen Utama Ticket
const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false); // Untuk modal konfirmasi

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/tickets.json");
        if (!response.ok) throw new Error("Failed to fetch tickets data");
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setTickets(data);
        } else {
          setError("No tickets available");
        }
      } catch (error) {
        console.error("Error fetching tickets data:", error);
        // setError("Could not load tickets. Using fallback data.");
        setTickets(fallbackTickets);
      }
    };

    fetchTickets();
  }, []);

  const addToCart = (ticket) => {
    setCart((prevCart) => {
      const existingTicket = prevCart.find((item) => item.id === ticket.id);
      if (existingTicket) {
        return prevCart.map((item) =>
          item.id === ticket.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...ticket, quantity: 1 }];
    });
  };

  const openTicketInfo = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeTicketInfo = () => {
    setSelectedTicket(null);
  };

  const handleConfirmPurchase = () => {
    // Lakukan tindakan konfirmasi pembelian
    alert("Pembelian telah dikonfirmasi.");
    setShowConfirmation(false); // Tutup modal konfirmasi
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1A1A19] p-6 py-[150px]">
      <h1 className="text-3xl font-popins text-white mb-6">Tickets</h1>

      {error && <p className="text-red-500 font-bold">{error}</p>}

      {/* Daftar Tiket */}
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-5xl w-full">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onAddToCart={addToCart}
              onCardClick={openTicketInfo}
              isInCart={cart.some((item) => item.id === ticket.id)}
            />
          ))
        ) : (
          <p className="text-[#9fa3c4]">No tickets available</p>
        )}
      </div>

      {/* Modal Tiket */}
      {selectedTicket && (
        <Modal ticket={selectedTicket} onClose={closeTicketInfo} />
      )}

      {/* Modal Konfirmasi Pembelian */}
      {showConfirmation && (
        <ConfirmationModal
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleConfirmPurchase}
        />
      )}

      {/* Keranjang Belanja */}
      <div className="bg-[#1c1f4a] rounded-lg p-4 py-[100px] mt-6 w-full max-w-4xl text-white">
        <h2 className="text-2xl font-popins mb-4 text-center">Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    {item.name} -{" "}
                    <span className="font-bold">
                      IDR {Number(item.price).toLocaleString()}
                    </span>{" "}
                    x {item.quantity}
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() =>
                        setCart((prevCart) =>
                          prevCart
                            .map((cartItem) =>
                              cartItem.id === item.id
                                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                                : cartItem
                            )
                            .filter((cartItem) => cartItem.quantity > 0)
                        )
                      }
                      className="bg-red-500 text-white py-1 px-3 rounded-lg"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-white py-1 px-3 rounded-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        setCart((prevCart) =>
                          prevCart.filter((cartItem) => cartItem.id !== item.id)
                        )
                      }
                      className="bg-red-600 text-white py-1 px-3 rounded-lg ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <p className="text-xl">
                Subtotal:{" "}
                <span className="font-bold text-white">
                  IDR {cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ).toLocaleString()}
                </span>
              </p>
            </div>
            <button
              onClick={() => setShowConfirmation(true)}
              className="mt-6 bg-[#ff4500] text-white py-2 px-6 rounded-lg w-full"
            >
              Pesan Sekarang
            </button>
          </>
        ) : (
          <p className="text-[#c49fa1] text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Ticket;
