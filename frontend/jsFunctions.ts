export let emptyStr = (str: string) => {
  return str === null || str.match(/^ *$/) !== null;
};
