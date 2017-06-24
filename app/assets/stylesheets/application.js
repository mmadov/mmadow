import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or any plugin's vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
  'import': 'url('https://fonts.googleapis.com/css?family=Lato:300,400|Source+Sans+Pro:200,300,400,600')',
  'import': 'url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css")',
  'body': {
    'fontFamily': ''Lato', sans-serif',
    'fontWeight': 'normal',
    'fontStyle': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'main_temp': {
    'display': 'inline',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  },
  '#main_sample': {
    'background': '#51a3ff',
    'color': '#fff',
    'borderRadius': '4px'
  },
  '#main_sample > a': {
    'color': '#fff'
  },
  'nav > li > a:hover': {
    'backgroundColor': '#61B1FF'
  },
  'nav > li > a:focus': {
    'backgroundColor': '#61B1FF'
  },
  'navbar-nav > li > a': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#61B1FF' }],
    'color': '#fff',
    'fontWeight': 'bold'
  },
  'thumbnail:hover': {
    'background': 'none'
  },
  '#main_sample > a:hover': {
    'background': 'none',
    'textTransform': 'none',
    'textDecoration': 'none'
  },
  '#main_sample:hover': {
    'background': '#4b94e6'
  },
  'thumbnail>img :hover': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4b94e6' }]
  },
  'input[type=text]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    // Full width
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    // Some padding
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    // Gray border
    'borderRadius': '4px',
    // Rounded borders
    'boxSizing': 'border-box',
    // Make sure that padding and width stays in place
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    // Add a top margin
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    // Bottom margin
    'resize': 'vertical '
  },
  'select': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    // Full width
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    // Some padding
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    // Gray border
    'borderRadius': '4px',
    // Rounded borders
    'boxSizing': 'border-box',
    // Make sure that padding and width stays in place
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    // Add a top margin
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    // Bottom margin
    'resize': 'vertical '
  },
  'textarea': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    // Full width
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    // Some padding
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    // Gray border
    'borderRadius': '4px',
    // Rounded borders
    'boxSizing': 'border-box',
    // Make sure that padding and width stays in place
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    // Add a top margin
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    // Bottom margin
    'resize': 'vertical '
  },
  // Style the submit button with a specific background color etc
  'input[type=submit]': {
    'backgroundColor': '#4b94e6',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '4px',
    'cursor': 'pointer'
  },
  // When moving the mouse over the submit button, add a darker green color
  'input[type=submit]:hover': {
    'backgroundColor': '#4b94e6'
  },
  // Add a background color and some padding around the form
  'containers': {
    'borderRadius': '5px',
    'backgroundColor': '#f2f2f2',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'bg': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'url('https://s-media-cache-ak0.pinimg.com/originals/8d/a9/98/8da998325542687d96375445dc1decc3.jpg')',
    'height': [{ 'unit': 'px', 'value': 230 }]
  },
  '#service': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1f1f1' }],
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 25 }],
    'textAlign': 'center',
    'WebkitTransition': '.3s',
    'transition': '.3s'
  },
  '#service > p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'bg-main': {
    'background': '#61CDFF',
    'height': [{ 'unit': 'px', 'value': 250 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }]
  },
  'bg-menu > text-center': {
    'padding': [{ 'unit': 'px', 'value': 90 }, { 'unit': 'px', 'value': 90 }, { 'unit': 'px', 'value': 90 }, { 'unit': 'px', 'value': 90 }]
  },
  'bg-menu > text-center > h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#fff'
  },
  'bottom': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'string', 'value': '#333' }]
  },
  'sub > a': {
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }],
    'background': '#fff'
  },
  'sub > a:hover': {
    'backgroundColor': '#61B1FF',
    'textDecoration': 'none',
    'color': '#fff'
  },
  '#main_temp': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f6f6f6' }]
  },
  'navbar-brand:hover': {
    'backgroundColor': '#61B1FF'
  }
});
