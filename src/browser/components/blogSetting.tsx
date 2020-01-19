import * as React from 'react';
import 'date-fns';
import format from 'date-fns/format';
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
      margin: `${theme.spacing(2.5)***REMOVED***px 0px `,
      minWidth: 120,
      maxWidth: 300,
  ***REMOVED***
***REMOVED***)
);

interface ConfigProps { digest: string, illustration: string, tags: string[], archiveTime: string, category: string***REMOVED***

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
***REMOVED***,
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

function getStyles(name: string, arr: string[], theme: Theme) {
  return {
    fontWeight:
      arr.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  ***REMOVED***
***REMOVED***

export default function BlogConfig(props: BlogConfigProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    new Date(),
  );
  const [illustration, setIllustration] = React.useState<string>('');
  const [digest, setDigest] = React.useState<string>('');

  const [selectTags, setTags] = React.useState<string[]>([]);
  const [selectCat, setCategory] = React.useState<string>('');

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  ***REMOVED***

  const handleTagsChange = (event: React.ChangeEvent<{ value: unknown ***REMOVED***>) => {
    setTags(event.target.value as string[]);
  ***REMOVED***
  const handleCatChange = (event: React.ChangeEvent<{ value: unknown ***REMOVED***>) => {
    setCategory(event.target.value as string);
  ***REMOVED***

  return (
    <div>
      <Drawer anchor="right" open={props.isOpen***REMOVED*** onClose={() => props.closeCb({
        archiveTime: format(selectedDate, 'yyyy-MM-dd'),
        illustration,
        tags: selectTags,
        category: selectCat,
        digest
    ***REMOVED***)***REMOVED***>
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
          <TextField className={classes.formControl***REMOVED*** id="outlined-basic" label="首页图片" variant="outlined" fullWidth onChange={e => setIllustration(e.target.value)***REMOVED*** />
          <TextField className={classes.formControl***REMOVED*** multiline id="outlined-basic" label="文章摘要" variant="outlined" rows={10***REMOVED*** fullWidth onChange={e => setDigest(e.target.value)***REMOVED*** />
          <FormControl className={classes.formControl***REMOVED*** fullWidth>
            <InputLabel id="demo-mutiple-name-label">文章标签</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={selectTags***REMOVED***
              onChange={handleTagsChange***REMOVED***
              input={<Input />***REMOVED***
              MenuProps={MenuProps***REMOVED***
            >
              {props.tags.map(name => (
                <MenuItem key={name***REMOVED*** value={name***REMOVED*** style={getStyles(name, props.tags, theme)***REMOVED***>
                  {name***REMOVED***
                </MenuItem>
              ))***REMOVED***
            </Select>
          </FormControl>
          <FormControl className={classes.formControl***REMOVED*** fullWidth>
            <InputLabel id="demo-mutiple-name-label">文章分类</InputLabel>
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              value={selectCat***REMOVED***
              onChange={handleCatChange***REMOVED***
              input={<Input />***REMOVED***
              MenuProps={MenuProps***REMOVED***
            >
              {props.cats.map(name => (
                <MenuItem key={name***REMOVED*** value={name***REMOVED*** style={getStyles(name, props.cats, theme)***REMOVED***>
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
