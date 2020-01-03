import * as React from 'react';
import { withStyles, Theme ***REMOVED*** from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import { TypographyProps ***REMOVED*** from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)***REMOVED***px auto 0`,
    backgroundColor: theme.palette.secondary.main,
***REMOVED***,
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)***REMOVED***px auto 0`,
    backgroundColor: theme.palette.secondary.main,
***REMOVED***,
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)***REMOVED***px auto 0`,
    backgroundColor: theme.palette.secondary.main,
***REMOVED***,
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
***REMOVED***,
***REMOVED***

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
***REMOVED***

const capitalize = (str: string | undefined) => !str ? '' : str.replace(str[0],str[0].toUpperCase());

function Typography(props: any) {
  const { children, classes, marked = false, variant, ...other ***REMOVED*** = props;

  return (
    <MuiTypography variantMapping={variantMapping***REMOVED*** variant={variant***REMOVED*** {...other***REMOVED***>
      {children***REMOVED***
      {marked ? (
        <span className={classes[`marked${capitalize(variant) + capitalize(marked)***REMOVED***`]***REMOVED*** />
      ) : null***REMOVED***
    </MuiTypography>
  );
***REMOVED***

export interface CTypographyProps extends TypographyProps {
  children: React.ReactNode,
  classes: { [key: string]: any ***REMOVED***,
  marked: false | 'center' | 'left',
  variant: "h1" | "h3" | "h2" | "button" | "caption" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "srOnly" | undefined
***REMOVED***

export default withStyles(styles)(Typography);
