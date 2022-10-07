
const layoutBorder = ({
  column,
  data,
  index,
  countItems,
}) => {
  const colorBorder = 'grey';
  const widthBorder = 1;
  let lenghtData = data.length;
  if (countItems) {
    if (column === 3 && countItems === 9) {
      if (index === 5) {
        return {
          borderTopColor: colorBorder,
          borderBottomColor: colorBorder,
          borderLeftColor: colorBorder,
          borderBottomWidth: widthBorder,
          borderLeftWidth: widthBorder,
          borderTopWidth: widthBorder,
        };
      }
      if (index === 6) {
        return { borderRightColor: colorBorder, borderRightWidth: widthBorder };
      }
      if (index === 8) {
        return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder };
      }
      if (index === 1 || index === 4) {
        return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder };
      }
      if (index === 2) {
        return {
          borderBottomColor: colorBorder,
          borderBottomWidth: widthBorder,
          borderLeftColor: colorBorder,
          borderLeftWidth: widthBorder,
        };
      }
      if (index !== 4 && index !== 1 && index !== 2 && index !== 5 && index !== 6 && index !== 7 && index !== 8) {
        return {
          borderBottomColor: colorBorder,
          borderRightColor: colorBorder,
          borderBottomWidth: widthBorder,
          borderRightWidth: widthBorder,
        };
      }
    }
    else if (column === 2 && countItems === 4) {
      if (index === 0) {
        return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder };
      }
      if (index === 1) {
        return {
          borderLeftColor: colorBorder,
          borderBottomColor: colorBorder,
          borderLeftWidth: widthBorder,
          borderBottomWidth: widthBorder,
        };
      }
      if (index === 3) {
        return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder };
      }
    }
    else if (column === 2 && countItems === 6) {
      if (index === 0 || index === 2) {
        return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder };
      }
      if (index === 1 || index === 3) {
        return {
          borderLeftColor: colorBorder,
          borderBottomColor: colorBorder,
          borderLeftWidth: widthBorder,
          borderBottomWidth: widthBorder,
        };
      }
      if (index === 5) {
        return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder };
      }
    }
  }
};

export default layoutBorder;
