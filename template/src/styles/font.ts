import mapValues from 'lodash/mapValues';

import { BASE_FONT_SIZE } from './constants';
import { Color } from './colors';


export enum FontWeight {
  BLACK = 'Rubik-Black', // 900
  BLACK_ITALIC = 'Rubik-BlackItalic',
  EXTRA_BOLD = 'Rubik-ExtraBold', // 800
  EXTRA_BOLD_ITALIC = 'Rubik-ExtraBoldItalic',
  BOLD = 'Rubik-Bold', // 700
  BOLD_ITALIC = 'Rubik-BoldItalic',
  SEMI_BOLD = 'Rubik-SemiBold', // 600
  SEMI_BOLD_ITALIC = 'Rubik-SemiBoldItalic',
  MEDIUM = 'Rubik-Medium', // 500
  MEDIUM_ITALIC = 'Rubik-MediumItalic',
  REGULAR = 'Rubik-Regular', // 400
  ITALIC = 'Rubik-Italic',
  LIGHT = 'Rubik-Light', //300
  LIGHT_ITALIC = 'Rubik-LightItalic',
}

export const font = {
  size: (fontSize = BASE_FONT_SIZE, lineHeight?: number) => mapValues(
    FontWeight,
    fontFamily => mapValues(
      Color,
      color => ({
        fontFamily,
        fontSize,
        lineHeight: lineHeight || fontSize,
        color,
      })
    )
  ),
};
