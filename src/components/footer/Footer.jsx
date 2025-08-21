import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-300 text-gray-200 py-4  shadow-inner">
      <div className="container mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
