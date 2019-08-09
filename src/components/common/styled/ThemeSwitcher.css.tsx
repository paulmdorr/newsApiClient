import styled from 'styled-components'

const Toggle = styled.label`
  background-color: #83d8ff;
  border-radius: 90px;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  position: relative;
  right: 0;
  top: 0;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  width: 90px;
  z-index: 2;
`

const ToggleHandler = styled.span`
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: inline-block;
  height: 44px;
  left: 3px;
  position: absolute;
  top: 3px;
  transform: rotate(-45deg);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  width: 44px;
  z-index: 1;
`
const Crater = styled.span`
  background-color: #e8cda5;
  border-radius: 100%;
  opacity: 0;
  position: absolute;
  transition: opacity 200ms ease-in-out;
`

const Crater1 = styled(Crater)`
  height: 4px;
  left: 10px;
  top: 18px;
  width: 4px;
`

const Crater2 = styled(Crater)`
  height: 6px;
  left: 22px;
  top: 28px;
  width: 6px;
`

const Crater3 = styled(Crater)`
  height: 8px;
  left: 25px;
  top: 10px;
  width: 8px;
`

const Star = styled.span`
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const Star1 = styled(Star)`
  height: 3px;
  left: 35px;
  top: 10px;
  width: 30px;
  z-index: 0;
`

const Star2 = styled(Star)`
  height: 3px;
  left: 28px;
  top: 18px;
  width: 30px;
  z-index: 1;
`

const Star3 = styled(Star)`
  height: 3px;
  left: 40px;
  top: 27px;
  width: 30px;
  z-index: 0;
`

const AnimatedStar = styled(Star)`
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const Star4 = styled(AnimatedStar)`
  height: 2px;
  left: 11px;
  transform: translate3d(3px, 0, 0);
  top: 16px;
  z-index: 0;
  width: 2px;
`

const Star5 = styled(AnimatedStar)`
  height: 3px;
  left: 17px;
  top: 32px;
  transform: translate3d(3px, 0, 0);
  width: 3px;
  z-index: 0;
`

const Star6 = styled(AnimatedStar)`
  height: 2px;
  left: 28px;
  top: 36px;
  transform: translate3d(3px, 0, 0);
  width: 2px;
  z-index: 0;
`

const ToggleWrapper = styled.div`
  bottom: 40px;
  height: 0;
  left: 900px;
  position: relative;
  transform: scale(0.6);
  width: 0;

  @media screen and (max-width: ${({ theme }) => theme.sizes.maxMobileSize}) {
    bottom: 35px;
    left: 90%;
    transform: scale(0.4);
  }
  
  input {
    left: -999em;
    position: absolute;
    visibility: hidden;
    z-index: 2;
  }

  input:checked {
    + ${Toggle} {
      background-color: #749DD6;
      
      ${ToggleHandler} {
        background-color: #FFE5B5;
        transform: translate3d(40px, 0, 0) rotate(0);
    
        .crater { opacity: 1; }
      }
      
      ${Star1} {
        height: 2px;
        width: 2px;
      }
      
      ${Star2} {
        height: 4px;
        transform: translate3d(-5px, 0, 0);
        width: 4px;
      }
      
      ${Star3} {
        transform: translate3d(-7px, 0, 0);
        height: 2px;
        width: 2px;
      }
      
      ${Star4},
      ${Star5},
      ${Star6} {
        opacity: 1;
        transform: translate3d(0,0,0);
      }
      ${Star4} {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      ${Star5} {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      ${Star6} {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }
`

export {
  ToggleWrapper,
  Toggle,
  ToggleHandler,
  Crater1,
  Crater2,
  Crater3,
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
}
