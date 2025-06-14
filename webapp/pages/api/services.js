export default async function handler(req, res) {
  const apiKey = process.env.SMO_API_KEY;
  const response = await fetch(`https://smoservice.media/api/v2/services?key=${apiKey}`);
  const services = await response.json();
  const updated = services.map(service => {
    const rate = +(parseFloat(service.rate) * 1.5).toFixed(4);
    return { ...service, rate };
  });
  res.status(200).json(updated);
}
