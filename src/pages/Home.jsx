import { useEffect, useState } from "react";

const AnimatedText = () => {
  const fullText = "Welcome, Archana!";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateText = () => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        setIndex(index + 1);
      }
    };

    const animationFrame = requestAnimationFrame(() => {
      updateText();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [index]);

  return (
    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center">
      {text}
    </h2>
  );
};

const MovingBox = () => {
  return (
    <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 xs:p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-white text-center">
        I Move Until You Hover!
      </h2>
      <p className="text-white text-center text-sm xs:text-base">
        Hover over me to stop moving.
      </p>
    </div>
  );
};

const MovingCard = () => {
  return (
    <div className="flex justify-center mt-4 xs:mt-6">
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 p-4 xs:p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-2 cursor-pointer animate-move-card">
        <h3 className="text-base xs:text-lg sm:text-2xl font-semibold text-white text-center">
          Moving Card
        </h3>
        <p className="text-white mt-2 xs:mt-4 text-center text-sm xs:text-base">
          This card moves up and down using a custom animation!
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className="flex-1 p-2 xs:p-4 sm:p-6 md:p-8 overflow-y-auto bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-4 xs:space-y-6">
        <AnimatedText />

        <div className="flex justify-center">
          <MovingBox />
        </div>
        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-md rounded-lg p-4 xs:p-6 sm:p-8 mx-auto">
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-center">
            Card Title
          </h3>
          <p className="text-gray-700 mt-2 text-xs xs:text-sm sm:text-base md:text-lg text-center">
            This is a simple card with some content. You can add more details
            here as needed.
          </p>
        </div>

        <MovingCard />
      </div>
    </main>
  );
};

export default Home;
