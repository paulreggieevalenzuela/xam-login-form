/**
 * Style Constants
 * Declare here the colors, sizes, etc that is defined
 */

// ------------------------------------
// Shared CTA styles
// ! Local DRY use only; don't export

// const CTA_DISABLED = {
//   color: '#ECEAE0',
//   text: '#444',
//   border: null,
// };

// const CTA_PRIMARY = {
//   base: {
//     color: '#3704FF',
//     text: '#fff',
//     border: null,
//   },

//   hover: {
//     color: '#262E35',
//   },

//   active: {
//     color: '#262E35',
//   },

//   disabled: CTA_DISABLED,
// };

export const StyleConstants = {
  color: {
    primaryBlue: '#3100ff',
    gray: '#6E7387',
    black: '#000',
    white: '#FFF',
    metallicdarkgray: '#D1CFCB',
    gray1: '#1C3454',
    gray2: '#38434D',
    gray3: '#526372',
    gray4: '#A9B1B8',
    tones: {
      mute: '#F0F0F0',
      red: '#FF645E',
      green: '#28A745',
    },
  },
  borderColor: '#E7EAF2',
  divider: '#CED4DA',
  shadow: [
    '0px 12px 15px rgba(140, 152, 164, 0.05)',
    '0px 12px 15px rgba(140, 152, 164, 0.1)',
    '0px 12px 15px rgba(140, 152, 164, 0.25)',
  ],
  focus: '0 0 1px 2px #4D90FE', // simulate the browser default for outline when focusing on elements ie: input, button, etc
  spacing: {
    4: '4px',
    8: '8px',
    10: '10px',
    12: '12px',
    14: '14px',
    16: '16px',
    20: '20px',
    24: '24px',
    30: '30px',
  },
  radius: {
    small: '5px',
  },
  body: {
    default: '#f3f3f3',
    background: '#fff',
    text: '#526372',
  },
};
