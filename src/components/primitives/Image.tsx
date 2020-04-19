import React, { ReactElement } from 'react'
import { Image as RNImage, Dimensions } from 'react-native'

interface ImageProps {
  src: string
  alt: string
}
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
}: ImageProps): ReactElement => {
  const dimensions = Dimensions.get('window')
  const imageHeight = Math.round((dimensions.width * 9) / 16)
  const imageWidth = dimensions.width

  return (
    <RNImage
      source={{ uri: src }}
      sx={{
        mx: { xs: 'auto', md: 0 },
        height: { imageHeight },
        width: { imageWidth },
      }}
      loading="lazy"
      resizeMode="contain"
      alt={alt}
    />
  )
}
