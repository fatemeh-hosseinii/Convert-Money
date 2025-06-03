import React from 'react';

type Container = {
  children: React.ReactNode;
};

const Container = ({ children }: Container) => {
  return (
    <div className="mx-auto px-4 ">
      {children}
    </div>
  );
};

export default Container;
