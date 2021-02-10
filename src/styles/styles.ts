import styled from 'styled-components'
import {mixin} from './mixin'

const SelectWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  height: auto;
  ${mixin.flexSet('center', 'center', 'column')}
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.twenty};
`;

const SelectNavbar = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  height: 44px;
  border: 1px solid black;
`;

const SelectTitle = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  height: 29px;
  ${mixin.flexSet('center', 'center', 'column')}
  margin-top:6px;
  

  .titleName {
    width: 115px;
    height: 29px;
    padding: 4px 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkSkyBlue};
    line-height: 29px;
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    font-weight: bold;
  }
`;

const CarsInformationWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  ${mixin.flexSet('center', 'center', 'column')};
  
  .carsInformationMain {
    width: 343px;
    height: 49px;
    ${mixin.flexSet('space-between', 'center', 'row')}
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyishBrown}
  }

  .carsInformationTitle {
    font-size: ${({ theme }) => theme.fontSizes.eighteen};
    font-family:${({ theme }) => theme.fontFamily.notoSans};
    font-weight: bold;
    line-height:22px;
    letter-spacing:-0.76px;
    color: ${({ theme }) => theme.colors.greyishBrown};
  }

  .arrowActive {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .arrowInactive {
    width: 18px;
    height: 18px;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

const AccidentsHistoryWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  ${mixin.flexSet('center', 'center', 'column')}
  margin-top:16px;
  

  .accidentsHistoryMain {
    ${mixin.flexSet('center', 'flex-start', 'column')}
    height: 81px;
    
  }

  .accidentsHistoryTitle {
    width: 53px;
    height: 22px;
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
  }

  .accidents {
    width: 343px;
    ${mixin.flexSet('space-between', 'center', 'row')}
    margin-top: 12px;
  }

  .accidentsActive {
    width: 168px;
    height: 47px;
    ${mixin.flexSet('center', 'center', 'column')}
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.darkSkyBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    font-weight: bold;
    cursor: pointer;
  }

  .accidentsInactive {
    width: 165px;
    height: 47px;
    ${mixin.flexSet('center', 'center', 'column')}
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkSkyBlue};
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    border: 1px solid ${({ theme }) => theme.colors.darkSkyBlue};
    border-radius: 8px;
    font-weight: medium;
    cursor: pointer;
  }
`;

const FixHistoryWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  ${mixin.flexSet('center', 'center', 'column')}
  margin-top:20px;

  .fixHistoryMain {
    ${mixin.flexSet('center', 'flex-start', 'column')}
    height: 123px;
  }

  .fixHistoryTitle {
    width: 53px;
    height: 22px;
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
  }

  .fixInput {
    width: 330px;
    height: 99px;
    margin-top: 12px;
    border-radius: 8px;
    border: none;
    padding-left: 13px;
    padding-top: 11px;
    word-break: normal;
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    font-weight: medium;
    background-color: ${({ theme }) => theme.colors.thickWhite};
    resize: none;
  }
`;


const CompanysWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.model1};
  ${mixin.flexSet('center', 'center', 'column')};
  margin-top: 16px;

  .companysMain {
    width: 343px;
    ${mixin.flexSet('space-between', 'flex-start', 'row')};
  }

  .companysTitle {
    width: 45px;
    height: 22px;
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
  }

  .foreignCars {
    width: 168px;
    ${mixin.flexSet('space-between', 'flex-start', 'row')};
  }

  .foreignCarsTitle {
    height: 19px;
    font-size: ${({ theme }) => theme.fontSizes.thirteen};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    color: ${({ theme }) => theme.colors.brownGrey};
    padding: 2.5px 0;
  }

  .foreignCarsBox {
    width: 18px;
    height: 18px;
  }

  .companysBrand {
    width: 343px;
    display: grid;
    grid-template-rows: 52px 52px;
    grid-template-columns: 116px 116px 116px;
    margin-top: 6px;
  }
`;

const CompanyWrapper = styled.div`
  .companyBrandActive {
    width: 110px;
    height: 47px;
    ${mixin.flexSet('center', 'center', 'column')}
    background-color: ${({ theme }) => theme.colors.darkSkyBlue};
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
  }

  .companyBrandInactive {
    width: 110px;
    height: 47px;
    ${mixin.flexSet('center', 'center', 'column')}
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.fifteen};
    color: ${({ theme }) => theme.colors.darkSkyBlue};
    font-family: ${({ theme }) => theme.fontFamily.notoSans};
    font-weight: medium;
    border: 1px solid ${({ theme }) => theme.colors.darkSkyBlue};
    border-radius: 8px;
    cursor: pointer;
  }
`;

export { 
  SelectWrapper, 
  SelectNavbar, 
  SelectTitle, 
  CarsInformationWrapper,
  AccidentsHistoryWrapper,
  FixHistoryWrapper,
  CompanysWrapper,
  CompanyWrapper
}