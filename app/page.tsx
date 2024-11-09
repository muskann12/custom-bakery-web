import Navbar from './components/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import Image from 'next/image';
import Footer from './components/Footer';

const specialties = [
  { name: 'Chocolate Cake', image: '/images/caramel.jpeg', price: '$25' },
  { name: 'Blueberry Cake', image: '/images/bb.jpeg', price: '$30' },
  { name: 'Fudge Brownie', image: '/images/brownie.jpeg', price: '$15' },
  { name: 'Coca Cake', image: '/images/chocolate.jpeg', price: '$20' },
  { name: 'Muffins', image: '/images/muffins.jpeg', price: '$10' },
  { name: 'Lemon Tart', image: '/images/lemon.jpeg', price: '$12' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 bg-blue-50">
        <h2 className="text-center text-4xl font-mono mt-8 mb-4 underline text-pink-700">BEST IN OUR MENU</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specialties.map((product, index) => (
            <div
              key={index}
              className="bg-pink-100 shadow-lg rounded-lg p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-t-lg object-cover"
              />
              <div className="flex flex-col justify-between items-center mt-4">
                <h3 className="text-2xl font-extrabold text-blue-400">{product.name}</h3>
                <p className="text-lg font-semibold text-pink-600">{product.price}</p>
                
                {/* Custom-styled "Add to Cart" button */}
                <button className="flex items-center gap-2 px-6 py-2 mt-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold rounded-full shadow-md transition-transform transform hover:scale-105 hover:from-pink-500 hover:to-pink-700">
                  <FaCartPlus size={20} />
                  <span>Add to Cart</span>
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
