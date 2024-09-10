import "./globals.css";

export const metadata = {
  title: "Radical",
  description: "Radical Motorsport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
