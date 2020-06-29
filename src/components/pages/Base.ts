import { el, fc, pk } from "../../utils";

export default fc<{ heading: string }>((props) =>
  pk([el("h1", {}, props.heading), ...(props?.children as any)])
);
