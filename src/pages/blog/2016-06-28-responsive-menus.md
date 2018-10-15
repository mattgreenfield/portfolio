---
title: Responsive Menus in a CMS
excerpt: My attempt at solving the problem of long site navigation menus on small screens.
path: '/blog/responsive-menu'
date: '2016-06-28'
---

In my day to day job I work at [Create](www.create.net), a CMS used by thousands of people.

We have a problem - users can add as many items to their website navigation as they like, and there's not always room for that many menu items.
So we need to educate the users on making a site navigation that is user friendly and... fits.

The first one isn't so hard, educating customers in best practices is part of what the company does.
But how do you make an object fit inside another when that other object can change in size?!

We've started playing around with javascript to move items that don't fit in to a "More" dropdown.
It's becoming a more and more popular design pattern and I really like it. It can reduce the need for hamburger toggled menus or certainly reduce the viewport width at which they are triggered.
[The Guardian](https://www.theguardian.com/uk) are the masters of this.

## Goals

- Responsive
- Run on resize
- Hide the "More" item if its empty
- Use vanilla javascript (it's proved tricky getting widths so I've used jQuery)

## Output

Here's what I've got so far (getting widths of flexbox elements with javascript seems temperamental on iOS devices.);

### HTML

```html
<nav class="js-site-navigation-container">
                    <ul class="reset-list list--inline js-site-navigation">
                        <li class="navigation__item"><a href="">Home</a></li>
                        <li class="navigation__item"><a href="">Work</a></li>
                        <li class="navigation__item"><a href="">Services</a></li>
                        <li class="navigation__item"><a href="">Blog</a></li>
                        <li class="navigation__item"><a href="">Contact</a></li>
                        <li class="navigation__item" id="js-navigation-more">
                            More <span clas="i i-menu"></span>
                            <ul class="navigation__dropdown"></ul>
                        </li>
                    </ul>
                </nav>
```

### jQuery

```JS
    var menu = $(".js-site-navigation"),
        menuItem = $(".js-site-navigation .navigation__item:not(#js-navigation-more)"),
        menuContainer = $(".js-site-navigation-container"),
        moreMenuItem = $('#js-navigation-more'),
        moreMenuItemList = $('#js-navigation-more ul');

    function moveToMore(item){
        // item.appendTo('#js-navigation-more ul');
        moreMenuItemList.append( item.clone() );
        item.hide();
    }

    function cropMenu(){

        var menuWidth = 0,
            itemsHidden = false,
            menuContainerWidth = menuContainer.outerWidth(),
            moreMenuItemWidth = moreMenuItem.outerWidth(true) + 5;
        // reset widths
        menuItem.each(function(){
            $(this).show();
        });
        moreMenuItem.show();
        moreMenuItem.find('.navigation__item').remove();

        // loop through each menu item width
        menuItem.each(function () {
            menuWidth = menuWidth + $(this).outerWidth(true) + 5;
            // console.log(menuWidth);
            if (menuWidth > ( menuContainerWidth - moreMenuItemWidth) ) {
                console.log('doesnt fit');
                moveToMore( $(this) );
                itemsHidden = true;
            }
        });

        // They all fit, remove the 'more' item
        if(!itemsHidden) {
            moreMenuItem.hide();
        }
    }

    cropMenu();

    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(cropMenu, 150);
    });
```
