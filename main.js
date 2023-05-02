document.addEventListener('DOMContentLoaded', () => {
    const scanButton = document.querySelector('.cta-sec');
    const qrVideo = document.querySelector('#qr-video');
  
    scanButton.addEventListener('click', async () => {
      if (window.QrScanner) {
        console.log('QrScanner is available');
        try {
          const qrScanner = new QrScanner(qrVideo, result => {
            console.log('QR code scanned:', result);
            qrScanner.stop(); // Stop scanning after a QR code is detected
            qrVideo.hidden = true;
          });
  
          qrVideo.hidden = false;
          await qrScanner.start();
        } catch (err) {
          console.error('Failed to start QR scanner:', err);
          qrVideo.hidden = true;
        }
      } else {
        console.log('QrScanner is not available');
        alert('QR Scanner is not available');
      }
    });
  });
  