import mapValues from 'lodash/mapValues';

import { BASE_FONT_SIZE } from './constants';
import { Color } from './colors';


export enum FontWeight {
  BLACK = 'Roboto-Black',
  BLACK_ITALIC = 'Roboto-BlackItalic',
  BOLD = 'Roboto-Bold',
  BOLD_ITALIC = 'Roboto-BoldItalic',
  ITALIC = 'Roboto-Italic',
  LIGHT = 'Roboto-Light',
  LIGHT_ITALIC = 'Roboto-LightItalic',
  MEDIUM = 'Roboto-Medium',
  MEDIUM_ITALIC = 'Roboto-MediumItalic',
  REGULAR = 'Roboto-Regular',
  THIN = 'Roboto-Thin',
  THIN_ITALIC = 'Roboto-ThinItalic',
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
