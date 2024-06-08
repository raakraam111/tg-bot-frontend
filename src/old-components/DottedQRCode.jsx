// import React from 'react';
// import qrcode from 'qrcode-generator';

// const DottedQRCode = ({ value, size = 256 }) => {
//     const qr = qrcode(4, 'H'); // '4' for type number (1-40), 'H' for error correction level
//     qr.addData(value);
//     qr.make();

//     const cellSize = size / qr.getModuleCount();
//     const qrSize = qr.getModuleCount() * cellSize;

//     return (
//         <div style={{ width: size, height: size, margin: 'auto', display: 'block' }}>
//             <svg width={qrSize} height={qrSize} viewBox={`0 0 ${qrSize} ${qrSize}`} xmlns="http://www.w3.org/2000/svg">
//                 {Array.from({ length: qr.getModuleCount() }, (_, row) => (
//                     Array.from({ length: qr.getModuleCount() }, (_, col) => (
//                         qr.isDark(row, col) && (
//                             <circle
//                                 key={`${row}-${col}`}
//                                 cx={(col + 0.5) * cellSize}
//                                 cy={(row + 0.5) * cellSize}
//                                 r={cellSize * 0.2} // Adjust the radius for dot size
//                                 fill="#000000" // Black color for the dots
//                             />
//                         )
//                     ))
//                 ))}
//             </svg>
//         </div>
//     );
// };

// export default DottedQRCode;
