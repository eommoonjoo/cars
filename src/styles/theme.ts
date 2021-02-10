const calcRem = ( size:number ) => `${size / 16}rem`;

const fontSizes = {
 thirteen: calcRem(13),
 fifteen: calcRem(15),
 eighteen: calcRem(18),
 twenty:calcRem(20) 
};


const colors = {
  greyishBrown:"#444444",
  white:"#ffffff",
  veryLightPink:"#e4e4e4",
  brownishGrey:"#666666",
  brownGrey:"#969696",
  black:"#222222",
  darkSkyBlue: "#2294e3",
  thickWhite: '#f7f7f7'
};

const fontFamily = {
  notoSans:"Noto Sans KR"
}

const deviceSizes = {
  model1: "375px",
};



const theme = {
  colors,
  fontSizes,
  fontFamily,
  deviceSizes
};


export default theme;