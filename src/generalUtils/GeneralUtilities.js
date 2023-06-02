export const getValueByKey = (key, arr) => {
    const value = arr.find((item) => item.key === key);
    return value ? value.value : "";
};

export const getKeyByValue = (value, arr) => {
    const key = arr.find((item) => item.value === value);
    return key ? key.key : undefined;
};