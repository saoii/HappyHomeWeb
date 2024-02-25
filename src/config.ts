const Config = {
  baseApiUrl: 'https://happyhomeapi.azurewebsites.net',
};

const currencyFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export default Config;
export { currencyFormatter };
