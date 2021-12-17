import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51IUeJ2ES0FdOsijHLGg4IRTBZs61UF3hGsPZId6eo7SPvVsvJTPkoo0dHsQw6bpFBcwA8jsYJNg06BI8ESP61PVD00OxSvDnCS',
);

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(500).json({
      error: 'Unexpected error.',
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    amount_total: 4000,
  });

  return res.redirect(303, session.url);
};

export default handler;
