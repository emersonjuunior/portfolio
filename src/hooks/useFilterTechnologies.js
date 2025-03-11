export const useFilterTechnologies = (arr) => {
  let technologies = [];
  if (arr.includes("html")) {
    technologies.push("1");
  }
  if (arr.includes("css")) {
    technologies.push("2");
  }
  if (arr.includes("js")) {
    technologies.push("3");
  }
  if(arr.includes("ts")){
    technologies.push("4")
  }
  if (arr.includes("c#")) {
    technologies.push("5");
  }
  if (arr.includes(".net")) {
    technologies.push("6");
  }
  if (arr.includes("react")) {
    technologies.push("7");
  }
  if (arr.includes("firebase")) {
    technologies.push("8");
  }
  if(arr.includes("tailwind")){
    technologies.push("9")
  }

  return technologies;
};
