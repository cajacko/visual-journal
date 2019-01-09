const regex = {
  props: new RegExp(/<%= (.*) %>/gm)
};

exports.render = function(str, data, options) {
  let newStr = str;

  newStr = newStr.replace(new RegExp(regex.props), function(match, p1) {
    if (data[p1]) return data[p1];

    return "";
  });

  return newStr;
};
