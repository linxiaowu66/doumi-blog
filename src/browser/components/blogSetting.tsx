import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

export default function BlogConfig(isOpen: boolean) {
  // const classes = useStyles();

  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={() => {}}>
      </Drawer>
    </div>
  );
}
