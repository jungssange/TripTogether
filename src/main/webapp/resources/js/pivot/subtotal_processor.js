(function() {
  var callWithJQuery;

  callWithJQuery = function(pivotModule) {
    if (typeof exports === "object" && typeof module === "object") {
      return pivotModule(require("jquery"));
    } else if (typeof define === "function" && define.amd) {
      return define(["jquery"], pivotModule);
    } else {
      return pivotModule(jQuery);
    }
  };

  callWithJQuery(function($) {
    var subtotalProcessor;
    subtotalProcessor = function(opts) {
      var colAttrs, processKey, rowAttrs;
      colAttrs = opts.cols;
      rowAttrs = opts.rows;
      processKey = function(record, totals, keys, attrs, f) {
        var addKey, attr, flatKey, k, key, len, ref;
        key = [];
        addKey = false;
        for (k = 0, len = attrs.length; k < len; k++) {
          attr = attrs[k];
          key.push((ref = record[attr]) != null ? ref : "null");
          flatKey = key.join(String.fromCharCode(0));
          if (!totals[flatKey]) {
            totals[flatKey] = f(key.slice());
            addKey = true;
          }
          totals[flatKey].push(record);
        }
        if (addKey) {
          keys.push(key);
        }
        return key;
      };
      return function(pivotData, record) {
        var aggregator, allTotal, colKey, colKeys, colTotals, fColKey, fRowKey, flatColKey, flatRowKey, i, j, k, m, n, ref, results, rowKey, rowKeys, rowTotals, tree;
        tree = pivotData.tree;
        rowKeys = pivotData.rowKeys;
        colKeys = pivotData.colKeys;
        rowTotals = pivotData.rowTotals;
        colTotals = pivotData.colTotals;
        allTotal = pivotData.allTotal;
        aggregator = pivotData.aggregator;
        allTotal.push(record);
        rowKey = processKey(record, rowTotals, rowKeys, rowAttrs, (function(_this) {
          return function(key) {
            return aggregator(_this, key, []);
          };
        })(this));
        colKey = processKey(record, colTotals, colKeys, colAttrs, (function(_this) {
          return function(key) {
            return aggregator(_this, [], key);
          };
        })(this));
        m = rowKey.length - 1;
        n = colKey.length - 1;
        if (m < 0 || n < 0) {
          return;
        }
        results = [];
        for (i = k = 0, ref = m; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
          fRowKey = rowKey.slice(0, i + 1);
          flatRowKey = fRowKey.join(String.fromCharCode(0));
          if (!this.tree[flatRowKey]) {
            tree[flatRowKey] = {};
          }
          results.push((function() {
            var l, ref1, results1;
            results1 = [];
            for (j = l = 0, ref1 = n; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
              fColKey = colKey.slice(0, j + 1);
              flatColKey = fColKey.join(String.fromCharCode(0));
              if (!tree[flatRowKey][flatColKey]) {
                tree[flatRowKey][flatColKey] = aggregator(this, fRowKey, fColKey);
              }
              results1.push(tree[flatRowKey][flatColKey].push(record));
            }
            return results1;
          }).call(this));
        }
        return results;
      };
    };
    return $.pivotUtilities.subtotal_processor = function(opts) {
      return subtotalProcessor(opts);
    };
  });

}).call(this);

//# sourceMappingURL=subtotal_processor.js.map
