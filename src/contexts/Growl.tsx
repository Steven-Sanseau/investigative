import React from 'react'

interface TogglerProps {
  hide: () => void
  error: (message: string) => {}
  info: (message: string) => {}
  success: (message: string) => {}
}

interface GrowlProps {
  type: string
  message: string
  open: boolean
}

const GrowlTogglerContext = React.createContext<TogglerProps | undefined>(
  undefined,
)
const GrowlValueProvider = React.createContext<GrowlProps | undefined>(
  undefined,
)

export function GrowlProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [growl, setGrowl] = React.useState({
    type: null,
    message: '',
    open: false,
  })
  const timeoutRef = React.useRef<number | null>(null)
  const hide = React.useCallback(() => {
    setGrowl((growl) => ({ ...growl, open: false }))
  }, [])
  const show = React.useCallback(
    (type, message) => {
      setGrowl({ type, message, open: true })
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(hide, 1500)
    },
    [hide],
  )
  const togglerValue = React.useMemo(
    () => ({
      hide,
      error: show.bind(null, 'error'),
      info: show.bind(null, 'info'),
      success: show.bind(null, 'info'),
    }),
    [hide, show],
  )
  return (
    <GrowlTogglerContext.Provider value={togglerValue}>
      <GrowlValueProvider.Provider value={growl}>
        {children}
      </GrowlValueProvider.Provider>
    </GrowlTogglerContext.Provider>
  )
}

export function useGrowlValue(): GrowlProps {
  return React.useContext(GrowlValueProvider)
}

export function useGrowl(): TogglerProps {
  return React.useContext(GrowlTogglerContext)
}
