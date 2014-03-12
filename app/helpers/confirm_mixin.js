module.exports = Ember.Mixin.create({
  confirm: function(msg) {
    return Ember.Deferred.promise(function(promise){
      if (typeof bootbox === "object" && typeof bootbox.confirm === "function") {
        bootbox.confirm(msg, function(result) {
          if (result) {
            promise.resolve();
          } else {
            promise.reject();
          }
        });
      } else {
        if (window.confirm(msg)) {
          promise.resolve();
        } else {
          promise.reject();
        }
      }
    });
  }
});
