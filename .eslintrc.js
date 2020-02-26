module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "ignorePatterns": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "no-null",
  ],
  "rules": {
    "@typescript-eslint/await-thenable": [
      "warn"
    ],
    "import/no-extraneous-dependencies": [
      "warn"
    ],
    "no-return-await": [
      "warn"
    ],
    "no-void": [
      "warn"
    ],
    "@typescript-eslint/no-explicit-any": [
      "off"
    ],
    "camelcase": [
      "off"
    ],
    "comma-dangle": [
      "off"
    ],
    "id-blacklist": [
      "off"
    ],
    "id-match": [
      "off"
    ],
    "no-magic-numbers": [
      "off"
    ],
    "no-underscore-dangle": [
      "off"
    ],
    "no-unused-expressions": [
      "off"
    ],
    "@typescript-eslint/class-name-casing": [
      "error"
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error"
    ],
    "@typescript-eslint/indent": [
      "error", 2
    ],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "error"
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "curly": [
      "error"
    ],
    "eol-last": [
      "error"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": [
      "error"
    ],
    "import/no-deprecated": [
      "error"
    ],
    "max-len": [
      "error",
      {
        "code": 180
      }
    ],
    "no-multiple-empty-lines": [
      "error"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-null/no-null": [
      "error"
    ],
    "no-shadow": [
      "error",
      {
        "hoist": "all",
        "builtinGlobals": false
      }
    ],
    "no-throw-literal": [
      "error"
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "radix": [
      "off"
    ],
    "spaced-comment": [
      "error"
    ],
    // "space-before-function-paren": [
    //     "error",
    //     {
    //         "anonymous": "always"
    //     }
    // ]
  },
  "settings": {
    "import/core-modules": [
      "@malagu/web/lib/node",
      "@malagu/web",
      "@malagu/core",
      "typeorm",
      "@material-ui/core/styles",
      "@material-ui/core/ButtonBase",
      "@material-ui/core/Container",
      "@material-ui/icons/Create",
      "@material-ui/icons/List",
      "@material-ui/icons/Label",
      "@material-ui/core/Typography",
      "@material-ui/core/Fab",
      "@malagu/core/lib/common/annotation/detached",
      "@material-ui/core/Snackbar",
      "@material-ui/icons/Done",
      "@material-ui/icons/ArrowForward",
      "@material-ui/core/Divider",
      "@material-ui/core",
      "@material-ui/core/Grid",
      "@material-ui/icons/GitHub",
      "@material-ui/icons/LocationOn",
      "@material-ui/icons/Link",
      "@material-ui/icons/Twitter",
      "@material-ui/core/Link",
      "@material-ui/icons/TagFaces",
      "@material-ui/icons/MoodBad",
      "@material-ui/core/Chip",
      "@material-ui/core/Card",
      "@material-ui/core/CardActions",
      "@material-ui/core/CardContent",
      "@material-ui/core/Button",
      "@malagu/react/lib/browser",
      "@material-ui/core/Chip",
      "@material-ui/core/Badge",
      "@material-ui/core/Avatar",
      "@material-ui/icons/Update",
      "@material-ui/core/Backdrop",
      "@material-ui/core/CircularProgress",
      "@material-ui/icons/CalendarToday",
      "@material-ui/icons/Category",
      "@material-ui/icons/FavoriteBorder",
      "@material-ui/icons/DescriptionOutlined",
      "@material-ui/core/TextField",
      "@material-ui/core/Menu",
      "@material-ui/core/MenuItem",
      "@material-ui/icons/Settings",
      "@material-ui/core/AppBar",
      "@material-ui/icons/ExitToApp",
      "@material-ui/core/IconButton",
      "@material-ui/icons/Menu",
      "@material-ui/icons/AccountCircle",
      "@material-ui/core/Tooltip",
      "@material-ui/core/Toolbar",
      "@material-ui/core/CssBaseline",
      "@material-ui/icons/Home",
      "@material-ui/icons/Archive",
      "@material-ui/icons/Bookmark",
      "@material-ui/icons/PersonPin",
      "@material-ui/icons/Web",
      "@material-ui/icons/Cloud",
      "@material-ui/core/useScrollTrigger",
      "@material-ui/core/Drawer",
      "@material-ui/core/Hidden",
      "@material-ui/core/List",
      "@material-ui/core/ListItem",
      "@material-ui/core/ListItemIcon",
      "@material-ui/core/ListItemText",
      "@material-ui/core/Zoom",
      "@material-ui/icons/KeyboardArrowUp",
      "@material-ui/core/CardActionArea",
      "@material-ui/core/CardMedia",
      "@material-ui/icons/Search",
      "@material-ui/core/InputBase",
      "@material-ui/core/Select",
      "@material-ui/core/Input",
      "@material-ui/core/InputLabel",
      "@material-ui/core/FormControl",
      "@material-ui/core/Breadcrumbs",
      "@material-ui/icons/Whatshot",
      "@material-ui/core/ClickAwayListener",
      "@material-ui/icons/Facebook",
      "@material-ui/icons/Email",
      "react",
      "winston"
    ]
  }
};
