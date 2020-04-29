import * as React from 'react'
import { GetCategoriesQuery } from '../generated/graphql'
import useSWR from 'swr'
import { getCategories } from '../graphql/category'
import { Box } from './primitives/Box'
import { Text } from './primitives/Text'
import { UniversalLink } from './UniversalLink'
import { H4 } from './Typography'

interface CategoriesListProps {
  initialCategoriesProps?: GetCategoriesQuery
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  initialCategoriesProps,
}: CategoriesListProps) => {
  const { data }: { data?: GetCategoriesQuery } = useSWR(getCategories, {
    initialData: initialCategoriesProps,
  })

  if (!data) {
    return <Text>...</Text>
  }

  return (
    <Box
      sx={{
        width: 'full',
        gridTemplateRows: { xs: 'repeat(8, 32px)', lg: 'repeat(4, 32px)' },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        },
      }}
    >
      {data.categories.nodes
        .filter((category) => category.show_menu.showHeaderMenu)
        .map((category) => (
          <UniversalLink
            routeName="category"
            params={{ slug: category.slug }}
            web={{
              as: `/category/${category.slug}`,
              path: `/category/${category.slug}`,
            }}
          >
            <H4
              sx={{
                color: category.color?.color ? category.color?.color : 'black',
                fontFamily: 'heading',
                fontSize: { xs: 3, sm: 3, md: 4, lg: 6 },
                fontWeight: '600',
              }}
            >
              {category.name}
            </H4>
          </UniversalLink>
        ))}
    </Box>
  )
}
