export default function formatMoney(amount = 0) {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: amount % 100 ? 0 : 2,
  });

  return formatter.format(amount / 100);
}
