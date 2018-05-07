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
  },
  editIcon: function(storyUser, loggedInUser, storyId, floating = true) {
    if (storyUser == loggedInUser) {
      if (floating) {
        return (
          `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red">
            <i class="fa fa-pencil"></i>
          </a>`
        );
      } else {
        return (
          `<a href="/stories/edit/${storyId}"><i class="fa fa-pencil"></i></a>`
        );
      }
    } else {
      return '';
    }
  }
};
