import * as React from 'react'

interface BreadcrumbProps {
  children: any
  Separator: any
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  Separator,
}: BreadcrumbProps) => {
  if (!children) {
    return null
  }

  return children.map((Child, index) => (!!index ? [Separator, Child] : Child))
}
