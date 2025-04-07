import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

function Learnomore() {
  return (

  <>
  <Navbar />
    <div className="text-gray-900 py-12 flex items-center">
      <div className="container mx-auto text-center min-h-screen">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          Vítejte na Learnomore!
        </h1>
        <p className="text-lg mb-8">
        LearnomoreLearnomoreLearnomoreLearnomoreLearnomoreLearnomoreLearnomoreLearnomoreLearnomoreLearnomore
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Naše lahodné dorty

            </h2>
            <p>
            Naše dorty jsou více než jen dezert – jsou uměleckým dílem,
             které přinese radost a nezapomenutelný zážitek na každou oslavu.
             Každý dort je pečlivě připraven s láskou,
             kvalitními ingrediencemi a s ohledem na detaily, které z něj činí dokonalý doplněk každé příležitosti.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Rozmanité druhy pro každou příležitost            </h2>
            <p>
            Ať už plánujete narozeniny, svatbu, firemní akci nebo jen malou oslavu, máme pro vás širokou nabídku dortů.
             Od klasických čokoládových a vanilkových až po speciální bezlepkové a veganské varianty.
              U nás najdete dort, který uspokojí každého.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Ruční výroba a kvalitní ingredience
            </h2>
            <p>
            Všechny naše dorty jsou vyráběny ručně, s důrazem na čerstvost a kvalitu. Používáme pouze ty nejlepší suroviny,
             které zajišťují nejen výjimečnou chuť,
             ale i dokonalý vzhled. Každý dort je pečený na míru podle přání našich zákazníků.
            </p>
          </div>
        </div>

        
      </div>
    </div>
<div className="">
<Footer />
</div>


    </>
  );
}

export default Learnomore;
