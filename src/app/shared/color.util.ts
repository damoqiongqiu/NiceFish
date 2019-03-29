const baseColor = [
  "#25859e",
  "#6acece",
  "#e78816",
  "#eabc7f",
  "#12619d",
  "#ad2532",
  "#15938d",
  "#b3aa9b",
  "#042d4c"
];
const genColor = (arr: any) => {
  let num = 0;
  let color = [];
  for (let i = 0; i < arr.length; i++) {
    if (num < baseColor.length) {
      color[i] = baseColor[num++];
    } else {
      num = 0;
      color[i] = baseColor[num++];
    }
  }
  return color;
};

export default {
  baseColor,
  genColor
}
