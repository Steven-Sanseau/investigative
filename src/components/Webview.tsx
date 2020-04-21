import React, { ReactElement } from 'react'

interface WebWiewProps {
  uri: string
}
export function Webview({ uri }: WebWiewProps): ReactElement {
  return <iframe src={uri} />
}
