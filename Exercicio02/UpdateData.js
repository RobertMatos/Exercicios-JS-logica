const updateData = (obj1, obj2) => {
  const updatedObj = { ...obj1 };

  Object.keys(obj2).forEach((key) => {
    if (updatedObj.hasOwnProperty(key)) {
      updatedObj[key] = obj2[key];
    }
  });

  return updatedObj;
};

module.exports = updateData;
