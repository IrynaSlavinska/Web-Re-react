import styled from '@emotion/styled';

export const EventCard = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const EventInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: rgb(150, 150, 150);
  }
`;

const setBcgColor = props => {
  switch (props.eventType) {
    case 'free':
      return 'rgb(43, 152, 43)';

    case 'paid':
      return 'rgb(89, 89, 221)';

    case 'vip':
      return 'rgb(239, 68, 68)';

    default:
      return 'rgb(231, 241, 79)';
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;

  background-color: ${setBcgColor};
`;

// export const Chip = styled.span`
//   position: absolute;
//   top: 4px;
//   right: 4px;
//   padding: 4px 8px;
//   border-radius: 4px;
//   text-transform: uppercase;

//   background-color: ${props => {
//   switch (props.eventType) {
//     case 'free':
//       return 'rgb(43, 152, 43)';

//     case 'paid':
//       return 'rgb(89, 89, 221)';

//     case 'vip':
//       return 'rgb(239, 68, 68)';

//     default:
//       return 'rgb(231, 241, 79)';
//   }
// }};
// `;
