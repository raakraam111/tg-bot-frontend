// components/TgDownload.jsx
import React from 'react';
import StyledButton from './StyledButton';

const TgDownload = () => {
  const handleClick = () => {
    // Detect user's OS and direct them to the corresponding download page
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=org.telegram.messenger';
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = 'https://apps.apple.com/app/telegram-messenger/id686449807';
    } else {
      window.location.href = 'https://desktop.telegram.org';
    }
  };

  return (
    <div className="tg-download-container">
      <p>Please use Telegram on your mobile device for the best experience.</p>
      <StyledButton onClick={handleClick}>
        Download Telegram
      </StyledButton>
    </div>
  );
};

export default TgDownload;

// Corresponding CSS in App.css or a dedicated CSS module
/*

*/
