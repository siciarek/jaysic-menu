var scripts = document.getElementsByTagName("script");
var path = scripts[scripts.length - 1].src.split("?")[0];
var mydir = path.split('/').slice(0, -1).join('/');
var csspath = mydir + "/css/";

(function ($) {

    $.jaysic = {};

    $.jaysic.menu = {

        printable: false,

        temp: 0,

        active: false,

        container: null,

        init: function () {

            var stylesheets = [
                "icons",
                "base",
                "top-menu-bar",
                "submenu",
                "separators",
                "print"
            ];

            var head = document.getElementsByTagName("head")[0];
            var stylesheet;
            var cssfile;
            var style;

            while (stylesheets.length) {
                style = stylesheets.shift();

                cssfile = csspath + style + ".css";

                stylesheet = document.createElement("link");
                stylesheet.setAttribute("rel", "stylesheet");
                stylesheet.setAttribute("type", "text/css");

                if (this.printable === false) {
                    stylesheet.setAttribute("media", style === "print" ? "print" : "screen");
                }

                stylesheet.setAttribute("href", cssfile);

                head.appendChild(stylesheet);
            }
        },

        menuItemHandler: function (t) {

            if ($.jaysic.menu.active === false) {
                return;
            }

            var submenu = t.children("ul");

            $("div.jaysic-menu *").removeClass("selected");
            t.parents("li").addClass("selected");

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
            var allmenus = $(".jaysic-menu ul:not(:first-child)");
            var menubar = $(".jaysic-menu > ul:first-child");
            allmenus.hide();
            menubar.show();
        },

        create: function (config, renderTo) {
            renderTo = renderTo || "menu";

            $.jaysic.menu.init();

            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            var menu = this.renderMenu(config, true);
            this.container.append(menu);

            var page = $("*");
            var menubar = $(".jaysic-menu ul:first-child > li");
            var submenu = $(".jaysic-menu ul:not(:first-child) li");

            // Check if you clicked inside the menu area:

            page.mousedown(function () {
                if($(this).parents().hasClass("jaysic-menu")) {
                    $.jaysic.menu.temp = 1;
                }
            }).mouseup(function () {
                if ($(this).prop("tagName").toLowerCase() === "html") {
                    $.jaysic.menu.active = $.jaysic.menu.temp === 1;
                    if ($.jaysic.menu.active === false) {
                        var positions = $(".jaysic-menu ul:first-child").children();
                        positions.removeClass("active");
                        $.jaysic.menu.hideAllSubmenus();
                    }
                    $.jaysic.menu.temp = 0;
                }
            });
            // Menu items handling:
            submenu.click(function () {
                console.log("SUBMENU");
                $.jaysic.menu.active === false;
                $.jaysic.menu.hideAllSubmenus();
            });
            submenu.mouseenter(function () {
                var t = $(this);

                $("div.jaysic-menu *").removeClass("selected");
                t.addClass("selected");
                t.siblings().children("ul").hide();

                if ($.jaysic.menu.active === true) {
                    $.jaysic.menu.menuItemHandler(t);
                }
            });

            // Menu bar handling:

            menubar.click(function () {
                $.jaysic.menu.active = true;
                var positions = $(".jaysic-menu ul:first-child").children();
                var i;
                for (i = 0; i < positions.length; i++) {
                    var position = $(positions[i]);
                    if (position.hasClass("separator")) {
                        continue;
                    }
                }
                $(this).trigger("mouseenter");
            }).mouseenter(function () {

                if ($.jaysic.menu.active === true) {
                    $.jaysic.menu.hideAllSubmenus();
                    $.jaysic.menu.menuItemHandler($(this));
                }
            });


        },

        renderMenu: function (children, root) {

            root = root || false;

            function addClass(element, classname) {
                var current = element.getAttribute("class");
                var c = current === null ? classname : classname + " " + current;

                element.setAttribute("class", c);
            }

            var container = document.createElement("ul");

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var isSeparator = element === "-" || (typeof element.type !== null && element.type === "separator");
                var hasChildren = typeof element.menu !== "undefined";
                var hasUrl = typeof element.url !== "undefined";
                var hasAction = typeof element.action !== "undefined";
                var hasIcon = typeof element.icon !== "undefined";
                var isDisabled = hasAction === false && hasUrl === false && hasChildren === false;
                var isDialogTrigger = typeof element.type !== "undefined" && element.type === "dialog";

                var menu = document.createElement("li");

                if (isSeparator) {
                    var separator = root === true ? "vertical" : "horizontal";
                    menu.setAttribute("class", "separator " + separator);
                }
                else {

                    if (typeof element.caption === "undefined") {
                        throw "Invalid menu definition";
                    }

                    var caption = element.caption;
                    caption += hasAction && isDialogTrigger ? "…" : "";

                    var text = document.createTextNode(caption);
                    var link = document.createElement("div");

                    link.appendChild(text);
                    menu.appendChild(link);

                    if (isDisabled) {
                        addClass(menu, "disabled");
                    }

                    if (hasIcon) {
                        addClass(menu, "icon icon-" + element.icon);
                    }

                    if (hasChildren) {
                        menu.appendChild(this.renderMenu(element.menu));
                        if (root === false) {
                            addClass(menu, "has-children");
                        }
                    }
                    else {

//                        if (hasAction) {
//                            menu.setAttribute("onclick", element.action);
//                        }
//                        if (hasUrl) {
//                            menu.setAttribute("onclick", "location.href='" + element.url + "'");
//                        }
                    }
                }
                container.appendChild(menu);
            }

            return container;
        }
    }

})(jQuery);
