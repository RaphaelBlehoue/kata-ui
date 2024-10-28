import ExchangeRateUpdater from "@creditAgricole/components/ExchangeRateUpdater";

const App = () => {
  return (
    <main className="container-main">
      <div className="text-center bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-6 font-bold text-[#00694E]">
          Convertisseur EUR/USD au taux de change réel
        </h1>
        <ExchangeRateUpdater />
      </div>
    </main>
  );
};

export default App;
