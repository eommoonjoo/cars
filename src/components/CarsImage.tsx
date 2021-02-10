import React from 'react';
import styled from 'styled-components';
import { mixin } from '../styles/mixin';

const CarsImage = () => {
  return (
    <CarsImageWrapper>
      <div className='carsImageHeader'>
        <div className='carsImageTitle'>차량 사진</div>
        <div className='carsImageSubTitle'>
          <div className='maxTen'>10개 등록 가능</div>
          <div className='maxTenCount'>0/10</div>
        </div>
      </div>

      <input type='file' accept='image/jpeg, image/jpg' />
    </CarsImageWrapper>
  );
};

export default CarsImage;

const CarsImageWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  ${mixin.flexSet('center', 'center', 'column')};
  margin-top: 16px;

  .carsImageHeader {
    width: 343px;
    ${mixin.flexSet('space-between', 'flex-start', 'row')};
  }

  .carsImageTitle {
    width: 60px;
    height: 22px;
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
  }

  .carsImageSubTitle {
    width: 118px;
    ${mixin.flexSet('space-between', 'flex-start', 'row')};
  }

  .maxTen {
    height: 19px;
    font-size: ${({ theme }) => theme.fontSizes.thirteen};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    color: ${({ theme }) => theme.colors.brownGrey};
    padding: 1.5px 0;
  }

  .maxTenCount {
    width: 31px;
    height: 19px;
    font-size: ${({ theme }) => theme.fontSizes.thirteen};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    font-weight: medium;
    color: ${({ theme }) => theme.colors.darkSkyBlue};
    line-height: 22px;
    letter-spacing: -0.46px;
  }
`;
