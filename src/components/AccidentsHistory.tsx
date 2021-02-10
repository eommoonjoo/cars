import React, { useState } from 'react';
import { AccidentsHistoryWrapper } from '../styles/styles';

const AccidentsHistory = () => {
  const [color, setColor] = useState([
    { id: 1, name: '사고 이력 있음', className: 'accidentsActive' },
    { id: 2, name: '사고 이력 없음', className: 'accidentsInactive' },
  ]);

  const onColor = () => {
    console.log(color);
    setColor(
      color.map((item: any) => {
        if (item.className === 'accidentsActive') {
          return { ...item, className: 'accidentsInactive' };
        } else {
          return { ...item, className: 'accidentsActive' };
        }
      })
    );
  };

  return (
    <AccidentsHistoryWrapper>
      <div className='accidentsHistoryMain'>
        <div className='accidentsHistoryTitle'>사고이력</div>
        <div className='accidents'>
          {color.map((item) => (
            <div
              key={item.id}
              className={`${item.className}`}
              onClick={onColor}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </AccidentsHistoryWrapper>
  );
};

export default AccidentsHistory;
