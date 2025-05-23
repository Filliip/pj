export const createPaymentIntent = async () => {
  const req = await fetch(`http://localhost:3000/create-payment-intent`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await req.json();
  console.log(data)
  return {
    status: req.status,
    clientSecret: data.clientSecret,
  };
};

export const loadConfig = async () => {
    const req = await fetch(`http://localhost:3000/config`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      publishableKey: data.publishableKey,
    };
  };