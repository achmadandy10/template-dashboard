import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#F2F2F2', '#202020')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('colorOne', 'colorTwo')(props),
      textUnderlineOffset: 3,
    }),
  },
  Input: defineMultiStyleConfig({
    baseStyle: (props: StyleFunctionProps) => {
      return definePartsStyle({
        field: {
          fontFamily: 'Gantari',
          backgroundColor: mode('whiteAlpha.900', 'whiteAlpha.200')(props),
        },
      });
    },
  }),
};

const fonts = {
  heading: "'Roboto'",
  body: "'Roboto'",
};

const colors = {
  lightFirst: '#FEFEFE',
  lightSecond: '#F2F2F2',
  darkFirst: '#0F0F0F',
  darkSecond: '#202020',
  colorOne: '#AAC8A7',
  colorTwo: '#C3EDC0',
  colorThree: '#E9FFC2',
  colorFour: '#FDFFAE',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});
