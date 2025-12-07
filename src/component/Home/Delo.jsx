import React from 'react';
import TipCard from './Tips';

const tips = [
  {
    title: "1. Give Every Taka a Job",
    body:
      "Your income is like a team. If some members have nothing to do, they’ll wander off into snacks, subscriptions, and impulse buys. Assign purpose to each coin.",
  },
  {
    title: "2. Track the Tiny Leaks",
    body:
      "It’s rarely the giant purchases that sink a budget. Watch the silent trio: small snacks, delivery fees, and auto-renew subscriptions. Map them and plug gently.",
  },
  {
    title: "3. Use the 50-30-20 Framework",
    body:
      "Think of your money as three containers: 50% needs, 30% wants, 20% savings. Even aiming toward it brings balance.",
  },
  {
    title: "4. Build a One-Month Buffer",
    body:
      "Try to stay one paycheck ahead. It’s like giving your future self a small umbrella against surprise expenses.",
  },
  {
    title: "5. Create Mini Budgets",
    body:
      "Slice your month: Food, Transport, Bills, Fun. Many small boats are easier to steer than one massive ship.",
  },
  {
    title: "6. Review Weekly, Not Monthly",
    body:
      "Weekly check-ins keep the story digestible and the plot predictable. Don’t wait for month-end surprises.",
  },
  {
    title: "7. Set Savings Goals With a Story",
    body:
      "“Save 10k” is cold. “Save 10k for a weekend getaway” feels alive. Give each goal a heartbeat.",
  },
  {
    title: "8. Separate Money by Purpose",
    body:
      "Use multiple accounts or digital envelopes. Money behaves better when it has personal space.",
  },
  {
    title: "9. Practice the 24-Hour Rule",
    body:
      "If it isn’t necessary, pause for 24 hours. Most impulses cool down like tea left on the table.",
  }
];

const Delo = () => {
    return (
        <section className="container mx-auto px-4 py-20 sm:py-14 lg:py-16">
            <header className="mb-6 sm:mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl text-center">
                    Budgeting Tips
                </h2>
                <p className="mt-2 text-accent text-lg text-center">
                    Simple, practical habits to keep your money on mission.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                {tips.map((t) => (
                    <TipCard key={t.title} title={t.title} body={t.body} />
                ))}
            </div>
        </section>
    );
};

export default Delo;