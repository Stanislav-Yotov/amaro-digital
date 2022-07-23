import { css } from "styled-components";

const Slide = ({ content }) => (
    <div
      css={css`
        height: auto;
        width: 100%;
        background-image: image-set('${content}');
        // background-size: cover;
        // background-repeat: no-repeat;
        // background-position: center;
      `}
    />
  )

  export default Slide;