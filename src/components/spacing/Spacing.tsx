import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"

interface Spacing {
  margin?: string
  padding?: string
}

interface SpacingProps {
  children: React.ReactElement
  desktop?: Spacing
  smart: Spacing
}

const useMargins = makeStyles((theme: Theme) => ({
  spacing: (props: SpacingProps) => ({
    margin: props.smart.margin,
    padding: props.smart.padding,
    [theme.breakpoints.up("md")]: {
      margin: props.desktop?.margin,
      padding: props.desktop?.padding,
    },
  }),
}))

const SpacingComponent = (props: SpacingProps) => {
  const classes = useMargins(props)
  let className = classes.spacing

  if(props.children.props.className) {
    className = className + ' ' + props.children.props.className
  }
  return React.cloneElement(props.children, {
    className
  })
}

export default SpacingComponent
