import React from 'react';
import { FixHistoryWrapper } from '../styles/styles';

const FixHistory = () => {
  return (
    <FixHistoryWrapper>
      <div className='fixHistoryMain'>
        <div className='fixHistoryTitle'>수리내역</div>
        <textarea
          className='fixInput'
          placeholder='구체적인 수리 내역을 작성해 주세요'
        />
      </div>
    </FixHistoryWrapper>
  );
};

export default FixHistory;
