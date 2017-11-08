/**
 * undefined なプロパティを削除
 *
 * @param obj
 */
const removeUndefinedProperty = (obj: { [key: string]: any }) => {
  return Object.entries(obj).reduce(
    (params: { [key: string]: any }, [key, value]) => {
      if (value === undefined) {
        return params;
      } else {
        Object.assign(params, { [key]: value });
        return params;
      }
    },
    {},
  );
};

export default { removeUndefinedProperty };
