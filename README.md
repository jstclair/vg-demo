## Knockout Virtual Grid Sample Site

This is a sample page for working with [knockout-virtual-grid](https://github.com/jstclair/knockout-virtual-grid)

At the moment, it assumes you've checked out both projects into the same folder.

> Later, once the knockout-virtual-grid is published (via bower/npm),
> this restriction will be removed

_In the steps below, I'm assuming you're going to be working from a common
folder, like: ~/repos_

### Instructions

* Clone the [knockout-virtual-grid](https://github.com/jstclair/knockout-virtual-grid) repository, and prepare it

```shell
cd ~/repos
git clone https://github.com/jstclair/knockout-virtual-grid.git
cd knockout-virtual-grid
npm install
bower install
gulp dist
```

* Clone this repository, and prepare it

```
cd ~/repos
git clone https://github.com/jstclair/vg-demo.git
cd vg-demo
npm install
bower install
```

* Build and view the site

```shell
gulp
```
