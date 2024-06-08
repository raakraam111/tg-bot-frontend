// import React from 'react';
// import qrcode from 'qrcode-generator';

// const CustomDottedQRCode = ({ value, size = 256, logoUrl }) => {
//     const qr = qrcode(4, 'H'); // Error correction level 'H'
//     qr.addData(value);
//     qr.make();

//     const cellSize = size / qr.getModuleCount();
//     const qrSize = qr.getModuleCount() * cellSize;

//     return (
//         <div style={{ position: 'relative', width: size, height: size + 50, margin: 'auto', textAlign: 'center', padding: 10 }}>
//             <svg width={qrSize} height={qrSize} viewBox={`0 0 ${qrSize} ${qrSize}`} xmlns="http://www.w3.org/2000/svg">
//                 {Array.from({ length: qr.getModuleCount() }, (_, row) => (
//                     Array.from({ length: qr.getModuleCount() }, (_, col) => (
//                         qr.isDark(row, col) && (
//                             <circle
//                                 key={`${row}-${col}`}
//                                 cx={(col + 0.5) * cellSize}
//                                 cy={(row + 0.5) * cellSize}
//                                 r={cellSize * 0.2} // Adjust the radius for dot size
//                                 fill="#00008B" // Dark blue color
//                             />
//                         )
//                     ))
//                 ))}
//             </svg>
//             {/* <img
//                 src={logoUrl}
//                 style={{
//                     position: 'absolute',
//                     left: '50%',
//                     top: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     width: 48,  // Adjust the logo size as needed
//                     height: 48
//                 }}
//                 alt="Logo"
//             /> */}
//             <div style={{ marginTop: 20 }}>
//                 <p>Scan to download Telegram</p>
//             </div>
//         </div>
//     );
// };

// export default CustomDottedQRCode;
