import {css} from 'styled-components';

type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type TAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

type TFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export const mixin = {
  flexSet: (
    justifyContent: TJustifyContent,
    alignItems: TAlignItems,
    flexDirection: TFlexDirection,
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};