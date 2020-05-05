import * as React from 'react'
import { GetCategoriesQuery } from '../generated/graphql'
import useSWR from 'swr'
import { getCategories } from '../graphql/category'
import { Box } from './primitives/Box'
import { Text } from './primitives/Text'
import { UniversalLink } from './UniversalLink'
import { H3 } from './Typography'

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
    <Box>
      {data.categories.nodes
        .filter((category) => category.showMenu.showheader)
        .map((category, index) => (
          <Box key={index} sx={{ my: 2 }}>
            <UniversalLink
              routeName="category"
              params={{ slug: category.slug }}
              web={{
                as: `/category/${category.slug}`,
                path: `/category/${category.slug}`,
              }}
            >
              <H3
                sx={{
                  color: category.color?.color
                    ? category.color?.color
                    : 'black',
                  fontFamily: 'heading',
                  fontSize: { xs: 2, sm: 2, md: 3, lg: 5 },
                  fontWeight: '600',
                }}
              >
                {category.name}
              </H3>
            </UniversalLink>
          </Box>
        ))}
    </Box>
  )
}
