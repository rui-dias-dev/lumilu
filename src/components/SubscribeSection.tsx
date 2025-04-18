import React, { FC } from 'react';
import SubscribeForm from './SubscribeForm';

const SubscribeSection: FC = ({}) => {
  return (
    <div className="h-[432px] w-full bg-red-600">
      <div className="mt-24 w-full px-16">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubscribeSection;
