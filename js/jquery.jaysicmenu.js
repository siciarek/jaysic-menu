(function ($) {

    jQuery.extend(jQuery.fn, {
        // Name of our method & one argument (the parent selector)
        hasParent: function (p) {
            // Returns a subset of items using jQuery.filter
            return this.filter(function () {
                // Return truthy/falsey based on presence in parent
                return $(p).find(this).length;
            });
        }
    });

    $.jaysic = {

        temp: 0,

        active: false,

        container: null,

        symbols: {
            ellip: "…"
        },

        menu: function (config, renderTo) {
            renderTo = renderTo || "menu";
            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            var menu = this.renderMenu(config, true);
            this.container.append(menu);

            $(".jaysic-menu ul:first-child > li").click(function () {
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
                $(this).trigger("mouseover");
            });

            $("*").mousedown(function () {
                $.jaysic.temp |= $(this).hasParent("div.jaysic-menu").length;
            })
            .mouseup(function () {
                if($(this).prop("tagName").toLowerCase() === "html") {
                    $.jaysic.active = $.jaysic.temp === 1;
                    if($.jaysic.active === false) {
                        var positions = $(".jaysic-menu ul:first-child").children();
                        positions.removeClass("active");
                    }
                    $.jaysic.temp = 0;
                }
            });

            $(".jaysic-menu li").mouseenter(function () {

                if ($.jaysic.active === false) {

                    return;
                }

                var t = $(this);
                var submenu = t.children("ul");

                if (submenu.length > 0) {

                    submenu.css({
                        left: t.position().left,
                        top: t.position().top + t.parent().height()
                    });

                    var width = 0;
                    var minWidth = parseInt($(submenu.children()[0]).css("min-width"));

                    for (i = 0; i < submenu.children().length; i++) {
                        var child = $(submenu.children()[i]);

                        var xwidth = child.width();
                        width = (xwidth > width) ? xwidth : width;
                    }

                    if (width - 24 > minWidth) {
                        submenu.children().width(width);
                    }

                    submenu.show();
                }
            });

            $(".jaysic-menu li").mouseleave(function () {
                var t = $(this);
                t.children("ul").hide();
            });

        },

        renderMenu: function (children, root) {

            root = root || false;

            var container = document.createElement("ul");

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var isSeparator = element === "-" || (typeof element.type !== null && element.type === "separator");
                var menu = document.createElement("li");

                if (isSeparator) {
                    var separator = root === true ? "vertical" : "horizontal";
                    menu.setAttribute("class", "separator " + separator);
                }
                else {
                    var hasChildren = typeof element.children !== "undefined";
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

                    if (hasIcon === true) {
                        link.setAttribute("class", "icon icon-" + element.icon);
                    }

                    if (hasChildren === true) {
                        menu.appendChild(this.renderMenu(element.children));
                        if (root === false) {
                            menu.setAttribute("class", "has-children");
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
