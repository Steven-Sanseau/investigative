import React, { ReactElement } from 'react'
import { ActivityIndicator, Image as RNImage } from 'react-native'
import { useStyling } from 'src/utils/native-styled'

export type Ref = React.RefObject<RNImage>

export type ImageProps = React.ComponentProps<typeof RNImage> & {
  alt: string
  displayName?: string
  sx?: any
  key?: string
}
export const Image: React.FC<ImageProps> = ({
  source,
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
        source={source}
        style={styling(styles)}
        onLoad={handleLoad}
        {...props}
      />
    </>
  )
}
