import * as React from 'react';
import 'date-fns';
import format from 'date-fns/format';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Drawer from '@material-ui/core/Drawer';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 350,
      padding: '10px 15px',
    },
    formControl: {
      margin: `${theme.spacing(2.5)}px 0px `,
      minWidth: 120,
      maxWidth: 300,
    }
  })
);

interface ConfigProps { digest: string, illustration: string, tags: string[], archiveTime: string, category: string}

interface BlogConfigProps {
  isOpen: boolean,
  closeCb: (data: ConfigProps) => void,
  tags: string[],
  cats: string[],
  initData?: {
    tags: string[],
    cat: string,
    archiveTime: string,
    illustration: string,
    digest: string,
  },
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, arr: string[], theme: Theme) {
  return {
    fontWeight:
      arr.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function BlogConfig(props: BlogConfigProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = React.useState<Date>(
     new Date()
  );
  const [illustration, setIllustration] = React.useState<string>('');
  const [digest, setDigest] = React.useState<string>('');

  const [selectTags, setTags] = React.useState<string[]>([]);
  const [selectCat, setCategory] = React.useState<string>('');

  React.useEffect(() => {
    if (props.initData?.archiveTime !== undefined) {
      setSelectedDate(props.initData?.archiveTime === '' ? new Date() : new Date(props.initData?.archiveTime))
    }
    if (props.initData?.illustration !== undefined) {
      setIllustration(props.initData?.illustration)
    }
    if (props.initData?.digest !== undefined) {
      setDigest(props.initData?.digest)
    }
    if (props.initData?.tags !== undefined) {
      setTags(props.initData?.tags)
    }
    if (props.initData?.cat !== undefined) {
      setCategory(props.initData?.cat)
    }
  }, [props])

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTagsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTags(event.target.value as string[]);
  };
  const handleCatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <div>
      <Drawer anchor="right" open={props.isOpen} onClose={() => props.closeCb({
        archiveTime: format(selectedDate, 'yyyy-MM-dd'),
        illustration,
        tags: selectTags,
        category: selectCat,
        digest
      })}>
        <div className={classes.root}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="date-picker-inline"
              label="归档时间"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <TextField
            className={classes.formControl}
            id="outlined-basic"
            label="首页图片"
            variant="outlined"
            value={illustration}
            fullWidth
            onChange={e => setIllustration(e.target.value)}
          />
          <TextField
            className={classes.formControl}
            multiline
            id="outlined-basic"
            label="文章摘要"
            variant="outlined"
            rows={10}
            value={digest}
            fullWidth
            onChange={e => setDigest(e.target.value)}
          />
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-mutiple-name-label">文章标签</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={selectTags}
              onChange={handleTagsChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {props.tags.map(name => (
                <MenuItem key={name} value={name} style={getStyles(name, props.tags, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-mutiple-name-label">文章分类</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              value={selectCat}
              onChange={handleCatChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {props.cats.map(name => (
                <MenuItem key={name} value={name} style={getStyles(name, props.cats, theme)}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Drawer>
    </div>
  );
}
