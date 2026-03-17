export interface BankInfo {
  name: string;
  accountName: string;
  accountNumber: string;
  qrCodeUrl: string;
}

export const paymentData: BankInfo[] = [
  {
    name: "CBE",
    accountName: "Holiday Hotel PVT.LTD.CO",
    accountNumber: "1000157421895",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1000157421895"
  },
  {
    name: "Abyssinia Bank",
    accountName: "Holiday Hotel PVT.LTD.CO",
    accountNumber: "36949333",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=36949333"
  },
  {
    name: "Wogagen Bank",
    accountName: "Holiday Hotel PVT.LTD.CO",
    accountNumber: "5000998877665",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=5000998877665"
  },
  {
    name: "Anbessa Bank",
    accountName: "Holiday Hotel PVT.LTD.CO",
    accountNumber: "00100000070",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=00100000070"
  }
];

export const telegramLink = "https://t.me/holiday_12345";
