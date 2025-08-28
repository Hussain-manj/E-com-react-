import { useNavigate } from "react-router-dom";

// category data
const category = [
  {
    image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
    name: 'fashion'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
    name: 'shirt'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
    name: 'jacket'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
    name: 'mobile'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
    name: 'laptop'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
    name: 'shoes'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
    name: 'home'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
    name: 'books'
  }
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          {/* main 2 */}
          <div className="flex gap-3 px-3">
            {/* category */}
            {category.map((item, index) => {
              return (
                <div key={index} className="flex-shrink-0 px-2 lg:px-6">
                  {/* Image */}
                  <div 
                  onClick={() => navigate(`/category/${item.name}`)}
                  className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700 hover:scale-105 cursor-pointer mb-2 flex items-center justify-center shadow-md hover:shadow-lg">
                    <div className="flex justify-center">
                      {/* Image tag */}
                      <img 
                        src={item.image} 
                        alt="img" 
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      />
                    </div>
                  </div>
                  {/* Name Text */}
                  <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase text-gray-700'>
                    {item.name}
                  </h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* style */}
      <style dangerouslySetInnerHTML={{ 
        __html: `
          .hide-scroll-bar { 
            -ms-overflow-style: none; 
            scrollbar-width: none;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          .hide-scroll-bar::-webkit-scrollbar { 
            display: none;
          }
        ` 
      }} />
    </div>
  );
};

export default Category;