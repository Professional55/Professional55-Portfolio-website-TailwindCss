import React from 'react';

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-center mb-8">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
        {title}
      </p>
    </div>
  );
};

export default Heading;
