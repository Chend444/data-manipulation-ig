const fs = require('fs');

function readMetricsFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

function groupMetricsByFilters(metricsCustomFilters) {
  const result = [];
  const filterMap = new Map();

  if (!Array.isArray(metricsCustomFilters)) {
    console.error('Invalid metrics data format');
    return null;
  }

  for (const metricData of metricsCustomFilters) {
    const metric = metricData.name;
    const filters = metricData.filters;

    const existingGroup = findExistingGroup(filterMap, filters);

    if (existingGroup) {
      existingGroup.metrics.push(metric);
    } else {
      const newGroup = {
        metrics: [metric],
        filters: filters.map(filter => ({
          kind: 'custom',
          data: filter.data,
        })),
      };
      result.push(newGroup);
      filters.forEach(filter => {
        const filterString = JSON.stringify(filter);
        filterMap.set(filterString, newGroup);
      });
    }
  }

  return result;
}


function findExistingGroup(filterMap, filters) {
  if (Array.isArray(filters)) {
    // If filters is an array, iterate through the array
    for (const filter of filters) {
      const filterString = JSON.stringify(filter);
      if (filterMap.has(filterString)) {
        return filterMap.get(filterString);
      }
    }
  } else if (typeof filters === 'object') {
    // If filters is an object, directly check if it exists in filterMap
    const filterString = JSON.stringify(filters);
    if (filterMap.has(filterString)) {
      return filterMap.get(filterString);
    }
  }
  return null;
}


module.exports = {
  readMetricsFromFile,
  groupMetricsByFilters,
};
