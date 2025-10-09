export default function Footer() {
    return (
      <footer className="bg-indigo-600 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-semibold text-lg">BDSJ Teaching’s</p>
          <p className="text-sm mt-2 text-gray-200">
            © {new Date().getFullYear()} BDSJ Teaching’s. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            India | USA | Canada | Europe
          </p>
        </div>
      </footer>
    );
  }
  