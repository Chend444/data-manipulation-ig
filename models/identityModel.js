const mergeIdentities = (identities) => {
  const mergedData = {};

  identities.forEach(identity => {
    for (const key in identity) {
      if (identity[key] !== null && identity[key] !== undefined) {
        if (!mergedData[key]) {
          mergedData[key] = [];
        }

        if (!mergedData[key].includes(identity[key])) {
          mergedData[key].push(identity[key]);
        }
      }
    }
  });

  return [mergedData];
};

module.exports = {
  mergeIdentities,
};
