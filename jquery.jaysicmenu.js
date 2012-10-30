var scripts = document.getElementsByTagName("script");
var path = scripts[scripts.length - 1].src.split("?")[0];
var mydir = path.split('/').slice(0, -1).join('/');
var csspath = mydir + "/css/";

(function ($) {

    $.jaysic = {};

    $.jaysic.menu = {

        style: "redmond",

        printable: false,

        temp: 0,

        token: 0,

        delay: 350,

        active: false,

        container: null,

        init: function () {

            var stylesheets = [
                "icons",
                "base",
                "submenu",
                "menu-bar",
                "separators",
                "print"
            ];

            var head = document.getElementsByTagName("head")[0];
            var stylesheet;
            var cssfile;
            var style;

            while (stylesheets.length) {
                style = stylesheets.shift();

                cssfile = csspath + this.style + "/" + style + ".css";

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

        menuBarItemHandler: function (t) {

            $.jaysic.menu.hideAllSubmenus();

            if (t.hasClass("disabled") === true) {
                return;
            }

            t.find("li").removeClass("selected");

            t.addClass("selected");

            var submenu = t.children("ul");

            if (submenu.length > 0) {

                var submenuLeft = t.position().left + 1;
                var submenuTop = t.position().top + t.height() + 7;

                submenu.css({
                    left: submenuLeft,
                    top: submenuTop
                });

                submenu.show();
            }
            else {
                $.jaysic.menu.doAction(t);
            }
        },

        submenuItemHandler: function (t, clicked) {

            clicked = clicked || false;

            if (t.hasClass("disabled") === true) {
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
            else {
                if (clicked === true) {
                    $.jaysic.menu.doAction(t);
                }
            }
        },

        hideAllSubmenus: function () {
            var allmenus = $(".jaysic-menu ul:not(:first-child)");
            var menubar = $(".jaysic-menu > ul:first-child");
            allmenus.hide();
            menubar.children("li").removeClass("selected");
            menubar.show();
        },

        doAction: function (t) {
            $.jaysic.menu.hideAllSubmenus();
            console.log(t);
            console.log("DO ACTION");
        },

        create: function (config, renderTo) {
            renderTo = renderTo || "menu";
            $.jaysic.menu.init();
            this.container = $("#" + renderTo);
            this.container.addClass("jaysic-menu");
            this.container.append(this.renderMenu(config, true));

            var insideMenu = $("div.jaysic-menu").get(0);

            // Click outside the menu:
            $("*").click(function (event) {
                if ($.contains(insideMenu, event.target) === false) {
                    $.jaysic.menu.hideAllSubmenus();
                }
            });

            $("div.jaysic-menu > ul:first-child > li").click(function (event) {
                var who = event.target;
                var t = $(this);

                if (t.hasClass("separator") === false && $(who).parents("li")[0] === this) {
                    $.jaysic.menu.menuBarItemHandler(t);
                }
            });

            $("div.jaysic-menu ul:not(:first-child) > li").click(function (event) {
                var who = event.target;
                var t = $(this);

                if (t.hasClass("separator") === false && $(who).parents("li")[0] === this) {
                    $.jaysic.menu.submenuItemHandler(t, true);
                }
            });

            $("div.jaysic-menu ul:not(:first-child) > li").mouseenter(function (event) {
                var who = event.target;
                var t = $(this);

                var token = Math.random();

                $.jaysic.menu.token = token;

                if (t.hasClass("separator") === false) {

                    t.children("ul").find("ul").hide();
                    t.siblings().children("ul").hide();
                    t.siblings().removeClass("selected");
                    t.find("li").removeClass("selected");

                    t.addClass("selected");

                    setTimeout(function () {

                            if ($.jaysic.menu.token === token) {
                                $.jaysic.menu.submenuItemHandler(t);
                            }
                        },
                        $.jaysic.menu.delay);
                }
            });

            $("div.jaysic-menu ul:not(:first-child) > li").mouseleave(function () {
                $.jaysic.menu.token = Math.random();
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
