import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string
export interface ThemeColors {
  white: Color
  black: Color
  error: Color

  black1: Color
  black2: Color
  black3: Color

  blue1: Color
  blue2: Color
  blue3: Color
  blue4: Color

  background1: Color
  background2: Color
  background3: Color

  modalBackground: Color

  red1: Color
  red2: Color
  red3: Color
}

declare module 'styled-components' {
  export interface AuctPoolTheme extends ThemeColors {
    mediaWidth: {
      upToSmall: ThemedCssFunction<AuctPoolTheme>
      upToLarge: ThemedCssFunction<AuctPoolTheme>
    }

    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
    adaptationWidth: number
    headerHeight: number
  }
}
