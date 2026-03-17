import { paymentData, telegramLink } from '../data/payment-data';

export default function PaymentSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <section id="payment" className="payment-section">
        <div className="container">
          <h2 className="section-title">Payment Options</h2>
          <div className="payment-container">
            {paymentData.map((bank, index) => (
              <div key={index} className="bank-qr-row">
                <div className="bank-info">
                  <h3>{bank.name}</h3>
                  <div className="account-details">
                    <div className="account-item account-name-item">
                      <label>Account Name:</label>
                      <div className="account-name-display">
                        <span className="account-name">{bank.accountName}</span>
                      </div>
                    </div>
                    <div className="account-item">
                      <label>Account Number:</label>
                      <div className="copy-container">
                        <span className="account-number">{bank.accountNumber}</span>
                        <button 
                          className="copy-btn" 
                          onClick={() => copyToClipboard(bank.accountNumber)}
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="qr-code">
                  <h3>{bank.name} QR</h3>
                  <div className="qr-placeholder">
                    <img src={bank.qrCodeUrl} alt={`${bank.name} QR Code`} className="qr-image" />
                    <p>{bank.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Receipt Attachment Section */}
      <section className="receipt-section-wrapper">
        <div className="receipt-section">
          <h3 className="receipt-title">Attach Payment Receipt</h3>
          <p className="receipt-description">
            After making your payment, please send the receipt screenshot to our Telegram account for verification.
          </p>
          <a 
            href={telegramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="telegram-link"
          >
            <i className="fab fa-telegram"></i>
            Send Receipt
          </a>
        </div>
      </section>
    </>
  );
}
