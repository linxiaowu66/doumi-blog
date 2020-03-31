import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

interface ClickTooltipProps {
  title: string;
  children: React.ReactElement;
  extraAction?: (extra: string) => void;
}

export default function ClickTooltip(props: ClickTooltipProps) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
    // if (props.extraAction) {
    //   props.extraAction(props.title);
    // }
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    if (props.extraAction) {
      props.extraAction(props.title);
    }
  };

  return (<ClickAwayListener onClickAway={handleTooltipClose}>
    <div>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={props.title}
      >
        <Fab onClick={handleTooltipOpen} color="secondary">
          {
            props.children
          }
        </Fab>
      </Tooltip>
    </div>
  </ClickAwayListener>
  );
}
