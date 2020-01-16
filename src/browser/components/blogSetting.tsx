import * as React from 'react';
import 'date-fns';
import { createStyles, makeStyles, useTheme, Theme ***REMOVED*** from '@material-ui/core/styles';
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
***REMOVED*** from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 350,
      padding: '10px 15px',
  ***REMOVED***,
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
  ***REMOVED***
***REMOVED***)
);

interface BlogConfigProps {
  isOpen: boolean,
  closeCb: () => void
***REMOVED***
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
  ***REMOVED***,
***REMOVED***,
***REMOVED***

const names = [
  'Nodejs',
  'CSS',
  'v8',
  'libuv',
  '读后感',
  'javascript',
  '算法',
  '理财',
  '架构',
  '测试',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  ***REMOVED***
***REMOVED***

export default function BlogConfig(props: BlogConfigProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  ***REMOVED***

  const handleChange = (event: React.ChangeEvent<{ value: unknown ***REMOVED***>) => {
    setPersonName(event.target.value as string[]);
  ***REMOVED***

  return (
    <div>
      <Drawer anchor="right" open={props.isOpen***REMOVED*** onClose={props.closeCb***REMOVED***>
        <div className={classes.root***REMOVED***>
          <MuiPickersUtilsProvider utils={DateFnsUtils***REMOVED***>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="date-picker-inline"
              label="归档时间"
              value={selectedDate***REMOVED***
              onChange={handleDateChange***REMOVED***
              KeyboardButtonProps={{
                'aria-label': 'change date',
            ***REMOVED******REMOVED***
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <TextField id="outlined-basic" label="首页图片" variant="outlined" fullWidth />
          <FormControl className={classes.formControl***REMOVED*** fullWidth>
            <InputLabel id="demo-mutiple-name-label">标签</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={personName***REMOVED***
              onChange={handleChange***REMOVED***
              input={<Input />***REMOVED***
              MenuProps={MenuProps***REMOVED***
            >
              {names.map(name => (
                <MenuItem key={name***REMOVED*** value={name***REMOVED*** style={getStyles(name, personName, theme)***REMOVED***>
                  {name***REMOVED***
                </MenuItem>
              ))***REMOVED***
            </Select>
          </FormControl>
        </div>
      </Drawer>
    </div>
  );
***REMOVED***
