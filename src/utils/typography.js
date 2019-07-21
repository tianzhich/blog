import Typography from "typography";
import githubTheme from "typography-theme-github";

const typography = new Typography(githubTheme);
const { rhythm, scale } = typography

export { rhythm, scale, typography as default };