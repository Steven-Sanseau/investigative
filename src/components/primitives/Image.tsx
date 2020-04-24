import React, { ReactElement } from 'react'
import { Image as RNImage, ActivityIndicator } from 'react-native'
import { useStyling } from 'src/utils/native-styled'
import { ThemedStyle } from 'src/utils/native-styled/ThemeContext'

export type Ref = React.RefObject<RNImage>

export type ImageProps = React.ComponentProps<typeof RNImage> & {
  src: string
  alt: string
  displayName?: string
  sx?: ThemedStyle
  key?: string
}
export const Image: React.FC<ImageProps> = ({
  src,
  displayName,
  sx,
  ...props
}: ImageProps): ReactElement => {
  const styling = useStyling()
  Image.displayName = displayName || 'Image'
  const [imageLoaded, setImageLoading] = React.useState<boolean>(false)

  const handleLoad = React.useCallback(() => setImageLoading(true), [])
  const styles = { width: 100, height: 100, ...sx }

  return (
    <>
      {!imageLoaded && <ActivityIndicator />}
      <RNImage
        source={{ uri: src }}
        style={styling(styles)}
        onLoad={handleLoad}
        {...props}
      />
    </>
  )
}
