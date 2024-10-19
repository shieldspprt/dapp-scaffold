import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const projectpage: NextPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Head>
        <title>Poolparty.finance</title>
        <meta
          name="description"
          content="Join the next generation of decentralized finance with our competitive platform on Solana. Deposit and vote for your favorite projects while earning exclusive token airdrops. A gamified experience for both new and established projects with a focus on community engagement and revenue sharing."
        />
      </Head>

      {/*  Pool Cards Section  */}
      <section className="container mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Available Pools</h2>
        {/*  Pool Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*  Pool Card 1  */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-48" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-modern-data-techncology-network-communications-design_1048-16342.jpg')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold leading-relaxed text-purple-600">MUSKarmy Pool</h3>
              <p className="mt-2 text-gray-500 font-light leading-relaxed">
                MUSKarmy brings you top AI and Energy coins build on Solana chain. We only pick the best crypto projects with doxed teams and good marketcap and sound tokenomics. MUSKarmy over all pool returns are 1.73X and we have run 34 pools.
              </p>
              <p className="mt-2 text-sm text-gray-500">Market Cap: $5M+ | Entry Fee: 10 SOL</p>
              <button onClick={openModal} className="inline-block mt-4 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">Participate</button>
            </div>
          </div>

          {/*  Pool Card 2  */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-48" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-600">MemePool</h3>
              <p className="mt-2 text-gray-500 font-light leading-relaxed">
                MemePool is a pool that is focused on community engagement and revenue sharing. We have a doxxed team and a solid tokenomics. We have run 12 pools and have a overall return of 1.2X. We are a community-focused project and have a strong social media presence.
              </p>
              <p className="mt-2 text-sm text-gray-500">Market Cap: $10M+ | Entry Fee: 20 SOL</p>
              <button onClick={openModal} className="inline-block mt-4 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">Participate</button>
            </div>
          </div>

          {/*  Pool Card 3  */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-48" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480196.jpg')" }}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-600">Ex-Tribe</h3>
              <p className="mt-2 text-gray-500 font-light leading-relaxed">
              Ex-Tribe betting heavy on Solana. Doxxed teams and a solid tokenomics. We have run 20 pools and have a overall return of 1.5X. We are a community-focused project and have a strong social media presence.
              </p>
              <p className="mt-2 text-sm text-gray-500">Market Cap: $15M+ | Entry Fee: 30 SOL</p>
              <button onClick={openModal} className="inline-block mt-4 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">Participate</button>
            </div>
          </div>
        </div>
      </section>

      {/*  Project Participation Form  */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-100 rounded-lg p-6" style={{ width: "400px" }}>
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Participate in the Pool</h2>
            <form className="space-y-6 overflow-y-auto max-h-[500px]">
              {/*  Project Name  */}
              <div>
                <label htmlFor="project-name" className="block text-sm font-medium text-purple-600">Project Name</label>
                <input type="text" id="project-name" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your project name" style={{ color: "blue" }} />
              </div>

              {/*  Project Logo  */}
              <div>
                <label htmlFor="project-logo" className="block text-sm font-medium text-purple-600">Logo URL</label>
                <input type="url" id="project-logo" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your project logo URL" style={{ color: "blue" }} />
              </div>
              

              {/*  Project Description  */}
              <div>
                <label htmlFor="project-description" className="block text-sm font-medium text-purple-600">Description</label>
                <textarea id="project-description" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Describe your project" style={{ color: "blue" }}></textarea>
              </div>

              {/*  Market Cap  */}
              <div>
                <label htmlFor="market-cap" className="block text-sm font-medium text-purple-600">Market Cap</label>
                <input type="number" id="market-cap" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter your project market cap" style={{ color: "blue" }} />
              </div>
              
              {/*  Project Contract Address  */}
              <div>
                <label htmlFor="Contract-address" className="block text-sm font-medium text-purple-600">Contract Address</label>
                <input type="text" id="Contract-address" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Provide the Token Contract Address" style={{ color: "blue" }} />
              </div>
              
              {/*  Project Offering  */}
              <div>
                <label htmlFor="project-offering" className="block text-sm font-medium text-purple-600">Offering</label>
                <input type="text" id="project-offering" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Offering against SOL pool, e.g. 1.7x" style={{ color: "blue" }} />
              </div>

              {/*  Deposit Tokens  */}
              <div>
                <label htmlFor="deposit-tokens" className="block text-sm font-medium text-purple-600">Deposit Tokens</label>
                <input type="number" id="deposit-tokens" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Enter the number of tokens you want to deposit" style={{ color: "blue" }} />
              </div>
      

              {/* add note to that an entry fee will be deducted on participation */}
              <p className="text-sm font-medium text-gray-500">Note: An entry fee of  <b>10 SOL</b> will be deducted from your wallet when you participate in this pool.</p>
                

              {/*  Close Button  */}
              <div className="flex items-center justify-end">
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">Close</button>
                {/*  Submit Button  */}
                <button type="submit" className="inline-block ml-4 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">Submit Project</button>
              </div>
            </form>
          </div>
        </div>      )}
    </div>
  );
};

export default projectpage;

