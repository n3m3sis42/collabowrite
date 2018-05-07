const moment = require('moment');
const stripHtml = require('string-strip-html');

module.exports = {
  truncate: function(str, len) {
    return str.length > len && str.length > 0 ? `${str.substring(0, len)}...` : str;
  },
  stripTags: function(input) {
    return stripHtml(input);
  },
  formatDate: function(date, format) {
    return moment(date).format(format);
  },
  select: function(selected, options) {
    return options.fn(this).replace(
      new RegExp(' value=\"' + selected + '\"'),
      '$& selected="selected"');
  }
};
