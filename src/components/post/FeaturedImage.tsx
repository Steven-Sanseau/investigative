import * as React from 'react'
import { Image } from 'src/components/primitives/Image'
import { Flex } from 'src/components/Grid'

interface FeaturedImageProps {
  src: string
  alt: string
  children: React.ReactChild
}

export const FeaturedImage: React.FC<FeaturedImageProps> = ({
  alt,
  src,
  children,
}: FeaturedImageProps) => {
  return (
    <Flex
      sx={{
        width: 'full',
        height: src ? '400hpx' : '100hpx',
        justifyContent: 'center',
        bg: src ? '' : 'darkGrey',
      }}
    >
      {src && (
        <Image
          source={{ uri: src }}
          alt={alt}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'full',
            height: '400hpx',
            zIndex: 0,
          }}
        />
      )}
      {children}
    </Flex>
  )
}
