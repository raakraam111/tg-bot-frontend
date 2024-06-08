// import React from 'react';
// import QRCode from 'qrcode.react';

// const DottedQRCodeWithCircularLogo = ({ url, logoUrl }) => {
//     return (
//         <div style={{ position: 'relative', display: 'inline-block', padding: 10 }}>
//             <QRCode
//                 value={url}
//                 size={256}
//                 bgColor="#FFFFFF"
//                 fgColor="#0000FF"  // Blue color for the QR code
//                 level="H"
//                 includeMargin={false}
//                 renderAs="svg"
//                 imageSettings={{
//                     src: logoUrl,
//                     x: null,
//                     y: null,
//                     height: 48,
//                     width: 48,
//                     excavate: true,  // Ensures the QR code does not render behind the logo
//                 }}
//                 style={{ borderRadius: '50%' }} // Optional: if you want the QR itself to be circular
//             />
//             <img
//                 src={logoUrl}
//                 style={{
//                     position: 'absolute',
//                     left: '50%',
//                     top: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     width: 48, // Set the size of the logo
//                     height: 48,
//                     borderRadius: '50%' // Makes the logo circular
//                 }}
//                 alt="Logo"
//             />
//         </div>
//     );
// };

// export default DottedQRCodeWithCircularLogo;
