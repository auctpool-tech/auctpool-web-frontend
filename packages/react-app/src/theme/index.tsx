import React, { useMemo } from 'react'
import { Text, TextProps } from 'rebass'
import styled, { 
    ThemeProvider as StyledComponentsThemeProvider, 
    AuctPoolTheme,
    css
}  from 'styled-components'
import { ThemeColors } from './styled'

const white = "#FFFFFF"
const black = "#000000"
const error = "#F65758"

function colors(): ThemeColors {
    return {
        white,
        black,
        error,
        black1: "#333333",
        black2: "#666666",
        black3: "#999999",

        blue1: "#2CACFF",
        blue2: "#1D82E6",
        blue3: "#0090ED",
        blue4: "#ABE1FC",

        background1: white,
        background2: white,
        background3: white,
      
        modalBackground: white,
      
        red1: "#F65758",
        red2: "#F65758",
        red3: "#F65758"
    }
}

const MEDIA_WIDTHS = {
    upToSmall: 800,
    upToLarge: 1200
}

const mediaWithTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
    (accumulator, size) => {
      ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
        @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
          ${css(a, b, c)}
        }
      `
      return accumulator
    },
    {}
  ) as any

function theme(): AuctPoolTheme {
    return {
        ...colors(),
        
        mediaWidth: mediaWithTemplates,

        flexColumnNoWrap: css`
          display: flex;
          flex-flow: column nowrap;
        `,
        flexRowNoWrap: css`
          display: flex;
          flex-flow: row nowrap;
        `,
        adaptationWidth: 1200,
        headerHeight: 70
    }
}

const ThemeProvider: React.FC = ({children}: {children?: React.ReactNode}) => {
    const themeObject = useMemo(() => theme(), [])
    return (
        <StyledComponentsThemeProvider theme={themeObject}>
            {children}
        </StyledComponentsThemeProvider>
    )
}

const TextWrapper = styled(Text)<{color: keyof ThemeColors}>`
    color: ${({color, theme}) => theme[color]}
`

export const Tag = {
    headerTitle(props: TextProps) {
        return <TextWrapper fontWeight={700} color={'black1'} {...props} />
    }
}

export * from './components'

export default ThemeProvider
