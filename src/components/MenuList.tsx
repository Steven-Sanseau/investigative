import React from 'react'
import { UniversalLink } from 'src/components/UniversalLink'
import { Text } from 'src/components/primitives/Text'
import { Box } from 'src/components/primitives/Box'
import { Page } from 'src/generated/graphql'

interface MenuListProps {
  type: string
  selector: string
  data: ({ __typename?: 'Page' } & Pick<Page, 'title' | 'uri'>)[]
}

export const MenuList: React.FC<MenuListProps> = ({
  data,
  selector,
  type,
}: MenuListProps) => {
  return (
    <Box sx={{ width: 'full' }}>
      <Box
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {data?.map((link, index) => (
          <UniversalLink
            key={index.toString()}
            routeName={type}
            params={{
              uri: link.uri,
            }}
            web={{
              path: `/${type}/[${selector}]`,
              as: `/${type}${link.uri}`,
            }}
            as={Text}
          >
            <Text sx={{ mx: index !== 0 ? 10 : 0, fontSize: 3 }}>
              {link.title}
            </Text>
          </UniversalLink>
        ))}
      </Box>
    </Box>
  )
}
