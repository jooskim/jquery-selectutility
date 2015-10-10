/**
 * Created by jooskim on 2/12/15.
 */

(function($) {
    var machinereadable = function() {
        var args = arguments;
        var value = null;
        var filter = function(humanreadable) {
            return this.find('option').filter(function(i) { return this.innerHTML == humanreadable });
        };

        if(args.length < 2) {
            value = this.val();
        } else {
            value = args[1];
        }

        if(this[0].tagName.toLowerCase() == 'input') {
            return this.val();
        }

        if(this.attr('multiple') != undefined) {
            var filtered = [];
            for(var i in value) {
                var arr = filter.call(this, value[i]);
                if(arr.length > 0) {
                    filtered.push(arr[0]);
                }
            }
            return filtered.map(function(d) { return d.getAttribute(args[0] ? args[0] : 'data-value')});
        } else {
            var arr = filter.call(this, value);
            return arr.length > 0 ? arr[0].getAttribute(args[0] ? args[0] : 'data-value') : -1;
        }
    };

    var humanreadable = function() {
        var args = arguments;
        var result = null;

        if(args.length < 2) {
            console.error('Invalid number of parameters');
            return;
        }

        if(this[0].tagName.toLowerCase() == 'input') {
            return args[1];
        }

        result = this.find('option').filter(function(i, v) { return v.getAttribute(args[0] ? args[0] : 'data-value') == args[1]; });
        return result.length == 0 ? -1 : result[0].innerHTML;
    };

    $.fn.mrValue = machinereadable;
    $.fn.hrValue = humanreadable;
    $.fn.textWidth = function(text, font) {
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
        return $.fn.textWidth.fakeEl.width();
    };

}(jQuery));
