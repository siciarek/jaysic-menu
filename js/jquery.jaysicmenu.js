(function ($) {

    $.jaysic = {

        temp: 0,

        active: false,

        container: null,

        symbols: {
            ellip: "…"
        },

        menuItemHandler: function (t) {

            if ($.jaysic.active === false) {
                return;
            }

            var submenu = t.children("ul");

            if (submenu.length > 0) {

                var submenuLeft = t.position().left + 1;
                var submenuTop = t.position().top + t.height() + 7;

                if (t.hasClass("has-children") === true) {
                    submenuLeft += t.parent().width() - 7;
                    submenuTop = t.position().top - 2;
                }

                submenu.css({
                    left: submenuLeft,
                    top: submenuTop
                });

                submenu.show();
            }
        },

        hideAllSubmenus: function () {
            var allmenus = $(".jaysic-menu ul");
            var menubar = $(".jaysic-menu > ul:first-child");
            allmenus.hide();
            menubar.show();
        },

        menu: function (config, renderTo) {
            renderTo = renderTo || "menu";
            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            var menu = this.renderMenu(config, true);
            this.container.append(menu);

            var page = $("*");
            var menubar = $(".jaysic-menu ul:first-child > li");
            var submenu = $(".jaysic-menu ul:not(:first-child) > li");



            // Check if you clicked inside the menu area:

            page.mousedown(function () {
                $.jaysic.temp |= $(this).parents("div.jaysic-menu").length;
            });

            page.mouseup(function () {
                if ($(this).prop("tagName").toLowerCase() === "html") {
                    $.jaysic.active = $.jaysic.temp === 1;
                    if ($.jaysic.active === false) {
                        var positions = $(".jaysic-menu ul:first-child").children();
                        positions.removeClass("active");
                        $.jaysic.hideAllSubmenus();
                    }
                    $.jaysic.temp = 0;
                }
            });

            // Menu bar handling:

            menubar.click(function () {
                $.jaysic.active = true;
                var positions = $(".jaysic-menu ul:first-child").children();
                var i;
                for (i = 0; i < positions.length; i++) {
                    var position = $(positions[i]);
                    if (position.hasClass("separator")) {
                        continue;
                    }
                    position.addClass("active");
                }
                $(this).trigger("mouseenter");
            });

            menubar.mouseenter(function () {

                $.jaysic.hideAllSubmenus();

                if ($.jaysic.active === true) {
                    $.jaysic.menuItemHandler($(this));
                }
            });

            // Menu items handling:
            submenu.click(function () {
                $.jaysic.hideAllSubmenus();
            });

            submenu.mouseenter(function () {
                var t = $(this);

                t.siblings().children("ul").hide();

                if ($.jaysic.active === true) {
                    $.jaysic.menuItemHandler(t);
                }
            });
        },

        renderMenu: function (children, root) {

            root = root || false;

            var container = document.createElement("ul");

            function addClass(element, classname) {
                var current = element.getAttribute("class");
                var c = current === null ? classname : classname + " " + current;
                element.setAttribute("class", c);
            }

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var isSeparator = element === "-" || (typeof element.type !== null && element.type === "separator");

                var menu = document.createElement("li");

                if (isSeparator) {
                    var separator = root === true ? "vertical" : "horizontal";
                    menu.setAttribute("class", "separator " + separator);
                }
                else {

                    var hasChildren = typeof element.menu !== "undefined";
                    var hasUrl = typeof element.url !== "undefined";
                    var hasAction = typeof element.action !== "undefined";
                    var hasIcon = typeof element.icon !== "undefined";

                    var text = document.createTextNode(element.caption);
                    var link = document.createElement("div");

                    link.appendChild(text);
                    menu.appendChild(link);

                    if (hasAction && hasChildren === false) {
                        menu.setAttribute("onclick", element.action);
                    }
                    else if (hasUrl && hasChildren === false) {
                        menu.setAttribute("onclick", "location.href='" + element.url + "'");
                    }

                    if(hasAction === false && hasUrl === false && hasChildren === false) {
                        addClass(menu, "inactive");
                    }

                    if (hasIcon === true) {
                        addClass(menu, "icon icon-" + element.icon);
                    }

                    if (hasChildren === true) {
                        menu.appendChild(this.renderMenu(element.menu));
                        if (root === false) {
                            addClass(menu, "has-children");
                        }
                    }
                }
                container.appendChild(menu);
            }

            return container;
        }
    }

})
    (jQuery);
