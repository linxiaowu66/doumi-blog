import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
  },
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

const capitalize = (str: string | undefined) => !str ? '' : str.replace(str[0],str[0].toUpperCase());

function Typography(props: any) {
  const { children, classes, marked = false, variant, ...other } = props;

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? (
        <span className={classes[`marked${capitalize(variant) + capitalize(marked)}`]} />
      ) : null}
    </MuiTypography>
  );
}

export interface CTypographyProps extends TypographyProps {
  children: React.ReactNode,
  classes: { [key: string]: any },
  marked: false | 'center' | 'left',
  variant: "h1" | "h3" | "h2" | "button" | "caption" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "srOnly" | undefined
};

export default withStyles(styles)(Typography);
