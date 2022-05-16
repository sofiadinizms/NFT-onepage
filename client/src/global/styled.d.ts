import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    colors: {
      salmonPink: string,
      darkPurple: string,
      white: string,
      lilac: string,
      mediumPurple: string,
      green400: string,
      green500: string,
      green1000: string
    },

    fonts: {
      family: string
    }
  }
}