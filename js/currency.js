var xrate = {
  uk: 0.65,
  eu: 0.76,
  ca: 1.03
};

function convertDolla(amount, currency) {
  return amount * xrate[currency];
 }
