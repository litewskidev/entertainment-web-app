export const strContains = (stString, ndString) => {
  if(stString.toLowerCase().includes(ndString.toLowerCase())){
    return true;
  } else {
    return false;
  }
};
