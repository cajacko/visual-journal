const regex = {
  props: new RegExp(/<%= (.*) %>/gm)
};

export const render = (str, data, options) => {
  let newStr = str;

  newStr = newStr.replace(new RegExp(regex.props), (match, p1) => {
    if (data[p1]) return data[p1];

    return "";
  });

  return newStr;
};
