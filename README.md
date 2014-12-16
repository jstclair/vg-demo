## Knockout Virtual Grid Sample Site

This is a sample page for working with [knockout-virtual-grid](https://github.com/jstclair/knockout-virtual-grid)

The initial page contains 100 rows, each containing 300 columns of data. On my
machine, in Chrome (Version 40.0.2214.38 beta (64-bit)), it uses approximately
125 MB. In Safari (Version 8.0.2 (10600.2.5)), it uses approximately 97 MB.



### Instructions

* Clone this repository, and prepare it

```
cd ~/repos
git clone https://github.com/jstclair/vg-demo.git
cd vg-demo
npm install
bower install
```

* Build it, and view the site

```shell
gulp
```

> NOTE: gulp (via browser-sync) will automatically start a web server to serve
> the site, and open your default browser

### EditableCell

Knockout Virtual Grid uses [editableCell](https://github.com/gnab/editableCell)
for navigation and editing; see the README or demo page for more information on
shortcut keys.
