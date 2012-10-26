(function ($) {

    $.jaysic = {

        container: null,

        menu: function (config, renderTo) {
            renderTo = renderTo || "menu";
            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            var menu = this.renderMenu(config, true);
            this.container.append(menu);

            $(".jaysic-menu li").mouseenter(function () {
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

                    if(width > minWidth) {
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

            var container = document.createElement("ul");

            if (root == true) {
                container.setAttribute("class", "root");
            }

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var isSeparator = element === "-" || (typeof element.type !== null && element.type === "separator");
                var menu = document.createElement("li");

                if(isSeparator) {
                    var separator = root === true ? "vertical" : "horizontal";
                    menu.setAttribute("class", "separator " + separator);
                }
                else
                {
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
                        menu.appendChild(this.renderMenu(element.children, false));
                        if(root === false) {
                            menu.setAttribute("class", "has-children");
                        }
                    }

                }

                container.appendChild(menu);
            }

            return container;
        }
    }

})(jQuery);
