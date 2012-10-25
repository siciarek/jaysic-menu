(function ($) {

    $.jaysic = {

        container: null,

        menu: function (config, renderTo) {
            renderTo = renderTo || "menu";
            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            var menu = this.renderMenu(config, true);
            this.container.append(menu);

            $(".jaysic-menu li").mouseenter(function() {
                var t = $(this);
                var submenu = t.children("ul");

                submenu.css({
                    left: t.position().left,
                    top: t.position().top + t.parent().height() - 1
                });

                var width = 0;

                for(i = 0; i < submenu.children().length; i++) {
                    var xwidth = $(submenu.children()[i]).width();
                    width = (xwidth > width) ? xwidth : width;
                }

                submenu.children().width(width);

                submenu.show();
            });

            $(".jaysic-menu li").mouseleave(function() {
                var t = $(this);
                t.children("ul").hide();
            });

        },

        renderMenu: function (children, root) {

            var container = document.createElement("ul");

            if(root == true) {
                container.setAttribute("class", "root");
            }

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var hasChildren = typeof element.children !== "undefined";
                var hasUrl = typeof element.url !== "undefined";
                var hasAction = typeof element.action !== "undefined";
                var hasIcon = typeof element.icon !== "undefined";

                var menu = document.createElement("li");
                var text = document.createTextNode(element.caption);
                var link = document.createElement("span");

                link.appendChild(text);
                menu.appendChild(link);

                if (hasAction && hasChildren === false) {
                    menu.setAttribute("onclick", element.action);
                }
                else if (hasUrl && hasChildren === false) {
                    menu.setAttribute("onclick", "location.href='" + element.url + "'");
                }

                if (hasIcon === true) {
                    menu.setAttribute("class", "icon icon-" + element.icon);
                }

                if (hasChildren === true) {
                    menu.appendChild(this.renderMenu(element.children, false));
                }

                container.appendChild(menu);
            }

            return container;
        }
    }

})(jQuery);
