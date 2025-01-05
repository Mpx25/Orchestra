// import React from 'react'
// import Tiket, { Ticket } from '../components/Ticket'

// export const Konser = () => {
//   return (
//     <div>
//       <Ticket />
//     </div>
//   )
// }

// export default Konser;
import React from "react";
import Ticket from "../components/Ticket"; // Import default export dari Ticket.jsx

const Konser = () => {
  return (
    <div>
      <Ticket /> {/* Memanggil komponen Ticket */}
    </div>
  );
};

export default Konser;
