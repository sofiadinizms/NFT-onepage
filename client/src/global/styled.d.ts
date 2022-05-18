import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    colors: {
      white: string,
      lilac: string,
      green400: string,
      green500: string,
      green1000: string
    },

    fonts: {
      family: string
    }
  }
}