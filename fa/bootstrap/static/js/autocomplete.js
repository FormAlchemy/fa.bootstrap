(function($) {

$.fa.extend({
  bootstrap_autocomplete_relation: function(field, plugin, options) {
    var auto = $('<input autocomplete="off" value="" />');
    label = field.parent().children('span');

    if (label.text()) { 
        field.parent().show()
        field.click();
    }
    else { 
        field.parent().hide()
    }

    options['select'] = function(event, ui) {
        field.val(ui.item.value);
        field.parent().children('span').text(ui.item.label);
        field.parent().show();
        auto.val(ui.item.label);
        field.click();
        return false;
    };

    options['source'] = options.source + '?filter_by=' + options.filter_by;

    auto.autocomplete(options);
    plugin.append(auto);
  }
});

})(jQuery);
