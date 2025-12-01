"use client"

import { cn } from "@/lib/utils"
import { createContext, useContext, useState, type ReactNode } from "react"
import { useMeasure } from "react-use"

type DetailsContextType = {
  isActive: boolean
  toggle: () => void
}

const DetailsContext = createContext<DetailsContextType | undefined>(undefined)

function useDetailsContext() {
  const context = useContext(DetailsContext)
  if (!context) {
    throw new Error("Details compound components must be used within Details.Item")
  }
  return context
}

type DetailsProps = {
  children: ReactNode
  className?: string
}

export function Details({ children, className }: DetailsProps) {
  return <div className={className}>{children}</div>
}

type DetailsItemProps = {
  children: (props: DetailsContextType) => ReactNode
  className?: string
}

function DetailsItem({ children, className }: DetailsItemProps) {
  const [isActive, setIsActive] = useState(false)

  const toggle = () => setIsActive(!isActive)

  return (
    <DetailsContext.Provider value={{ isActive, toggle }}>
      <div className={className}>{children({ isActive, toggle })}</div>
    </DetailsContext.Provider>
  )
}

type DetailsContentProps = {
  children: ReactNode
  className?: string
}

function DetailsContent({ children, className }: DetailsContentProps) {
  const { isActive } = useDetailsContext()
  const [ref, { height }] = useMeasure<HTMLDivElement>()

  return (
    <div
      className={className}
      style={{
        height: isActive ? height : 0,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}

Details.Item = DetailsItem
Details.Content = DetailsContent
