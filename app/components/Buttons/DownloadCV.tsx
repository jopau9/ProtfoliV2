import styled from 'styled-components';
import { dm_serif_text } from "../../fonts";

const Button = () => {
  return (
    <StyledWrapper>
      <button onClick={() => {
        const link = document.createElement('a');
        link.href = 'PDF/CV_JoanPau.pdf'; 
        link.download = 'CV_JoanPau.pdf';
        link.click();
      }}>
        <span className={`${dm_serif_text.className} text`}>CV</span>

        <span className="iconWrapper">
          <svg className="svgIcon" viewBox="0 0 384 512" height="1em">
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 
            370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 
            32.8 0 45.3l160 160z" />
          </svg>

          <span className="icon2" />
        </span>
      </button>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    overflow: hidden;
    border: 1px solid #18181a;
    color: #18181a;
    display: inline-block;
    font-size: 60px;
    background: #fff;
    cursor: pointer;
    padding: 60px;
    padding-left: 70px;
    padding-right: 70px;
    
  }

  /* Primer text */
  button span.text {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
  }

  /* El contenidor de les icones */
  button span.iconWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 225%);
    z-index: 100;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
  }

  /* Fons animat */
  button:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(0);
    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 50;
  }

  /* Hover background */
  button:hover:after {
    transform: skewY(9.3deg) scaleY(2);
  }

  /* Hover icones */
  button:hover .iconWrapper {
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  /* Estil SVG i línia */
  .svgIcon {
    fill: rgba(255, 255, 255, 1);
  }

  .icon2 {
    width: 40px;
    height: 10px;
    border-bottom: 5px solid rgba(255, 255, 255, 1);
    border-left: 5px solid rgba(255, 255, 255, 1);
    border-right: 5px solid rgba(255, 255, 255, 1);
  }
`;

export default Button;
