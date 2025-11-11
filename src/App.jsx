import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState(null);

  //Show Notification When Count is multiple Of 10
  useEffect(() => {
    if(count % 10 === 0 && count !== 0) {
      setNotification(`تبریک دوست عزیز!🌹 شما به ${count} رسیدید.`);
      setTimeout(() => setNotification(null) , 3000);
    }
  }, [count]);

  return (
  <div className={`min-h-screen bg-gradient-to-br from-yellow-600 to-indigo-400 flex flex-col item-center justify-center p-4
  transition-all duration-500`}>
    {/* Main Counter Card */}
    <div className={`bg-amber-700/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden
      border border-white/20`}>
        <div className={`absolute -top-10 -left-10 w-40 h-40 bg-green-800 opacity-20 rounded-full`}></div>
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-red-700 opacity-20 rounded-full`}></div>
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">شمارنده هوشمند</h1>
        <div className={`bg-indigo-800/40 backdrop-blur-md rounded-lg p-10 mb-8 border border-white/20`}>
        <div className="relative">
          <span className="block text-8xl font-bold text-white/20 transition-all duration-300 transform"
          style={{textShadow: '0 4px 10px rgba(0,0,0,0.5)'}}>
            {count}
          </span>
          {count !== 0 && (
            <span className={`absolute -top-2 -right-2 bg-pink-500 px-2 py-1 rounded-full text-sm font-bold text-white shadow-lg`}>
              {count % 2 === 0 ? 'زوج' : 'فرد'}
            </span>
          )}
        </div>
        </div>
        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <button
          onClick={() => setCount(count - 1)}
          className={`bg-orange-400 hover:bg-blue-600 text-white bg-opacity-90 font-bold py-3 px-8 rounded-full transition-all
          hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}>
            -
          </button>
          {/* part340--3:54 */}
        </div>
      </div>
    
  </div>
  );
};

export default App;
