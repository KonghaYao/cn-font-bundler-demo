import { css } from "../assets/Hangeuljaemin4-Regular.otf";
export default () => {
  console.log(css);
  return (
    <div
      style={{
        fontFamily: `'${css.family}'`,
      }}
    >
      中文网字计划
    </div>
  );
};
