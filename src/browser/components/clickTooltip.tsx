import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

interface ClickTooltipProps {
  title: string;
  children: React.ReactElement;
  extraAction?: (extra: string) => void;
***REMOVED***

export default function ClickTooltip(props: ClickTooltipProps) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
    if (props.extraAction) {
      props.extraAction(props.title)
  ***REMOVED***
  ***REMOVED***

  const handleTooltipOpen = () => {
    setOpen(true);
    if (props.extraAction) {
      props.extraAction(props.title);
  ***REMOVED***
  ***REMOVED***

  return (<ClickAwayListener onClickAway={handleTooltipClose***REMOVED***>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
        ***REMOVED******REMOVED***
          onClose={handleTooltipClose***REMOVED***
          open={open***REMOVED***
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={props.title***REMOVED***
        >
          <Fab onClick={handleTooltipOpen***REMOVED*** color="secondary">
            {
              props.children
          ***REMOVED***
          </Fab>
        </Tooltip>
      </div>
    </ClickAwayListener>
  )
***REMOVED***
