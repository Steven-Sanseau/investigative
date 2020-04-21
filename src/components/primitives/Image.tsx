import React, { ReactElement } from 'react'
import { View, Image as RNImage, ActivityIndicator } from 'react-native'
import { BoxProps } from 'src/components/primitives/Box'
import { useStyling } from 'src/utils/native-styled'

interface ImageProps extends BoxProps {
  src: string
  alt: string
  thumbnail?: string
}
export const Image: React.FC<ImageProps> = React.forwardRef<
  HTMLDivElement,
  ImageProps
>(
  (
    { src, thumbnail, alt, displayName, sx, ...props }: ImageProps,
    ref,
  ): ReactElement => {
    const styling = useStyling()
    Image.displayName = displayName || 'Image'
    const [imageLoaded, setImageLoading] = React.useState<boolean>(false)

    const handleLoad = React.useCallback(() => setImageLoading(true), [])

    return (
      <>
        {!imageLoaded && <ActivityIndicator />}

        <RNImage
          ref={ref}
          {...props}
          source={{ uri: src }}
          style={styling(sx)}
          onLoad={handleLoad}
        />
      </>
    )
  },
)
