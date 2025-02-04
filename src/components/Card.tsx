import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition-all duration-300" data-aos="zoom-in-up">
      {/* Image Section */}
      <div className="mb-4">
        <Image
          className="w-full h-56 object-cover rounded-md"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="text-xl font-semibold text-gray-800 mb-2">{title}</div>
        <div className="text-gray-600 text-sm mb-4">{desc}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <div className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
