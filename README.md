jaysic-menu
===========

Yet Another JavaScript Drop-Down menu

## Info

JaySic Menu is drop down menu for webdevelopers and webmasters. It has classical MS Windows look and feel.
Menu icons and disabled values are supported.

## Installation

Include scripts *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script type="text/javascript" src="/path/to/jaysic-menu/jquery.jaysicmenu.js"></script>
```


## Usage

Menu is create with method `$.jaysic.menu.create(config);` where `config` is `JavaScript` array (JSON format).

## Menu config (attributes)

Menu config should be defined as valid JSON array of menu item objects. Menu item object has following variables:

### caption

The only required variable, where no caption is given Exception is thrown. It can contain any string of reasonable length.

### caption

Menu item icon, should be the proper name of defined css class, "icon-" prefix is mandatory.

### type

Type of menu item. At the moment `separator` and `dialog` are supported. `separator` displays vertical rule in menu bar
and horizontal rule in submenus. String "-" is a shortcut for separator. `dialog` adds three dots at the end of caption.



## Menu config (content description)

There are three attributes which can be used (exclusively) to describe menu item action. Using more than one
variable does not trigger an exception, because they are supported in order (menu, action, url).

### menu

Next level menu.

### action

Contains definition of the function to be triggered by the menu item click.

### url

Contains url of a target page.

## Sample menu config

```javascript
[
    {
        "caption": "File", // Text to display (required)
        "icon": "file",    // Menu item icon, should be the name
    }
]
```



## Demo page

[http://it.siciarek.pl/jaysic-menu/demo/index.html](http://it.siciarek.pl/jaysic-menu/demo/index.html)



## Development

- Source hosted at [GitHub](https://github.com/siciarek/jaysic-menu)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/siciarek/jaysic-menu/issues)


## Authors

[Jacek Siciarek](https://github.com/siciarek)
