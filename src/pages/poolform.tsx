import type { NextPage } from "next";
import Head from "next/head";

const PoolForm: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poolparty.finance</title>
        <meta
          name="description"
          content="Join the next generation of decentralized finance with our competitive platform on Solana. Deposit and vote for your favorite projects while earning exclusive token airdrops. A gamified experience for both new and established projects with a focus on community engagement and revenue sharing."
        />
      </Head>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-7xl font-extrabold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Start Your Own Pool Party! &nbsp;
            <span role="img" aria-label="party popper emoji">
              🎉
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-purple-600">
          Bring in projects or depositers, set the rules, and let depositors vote for the token they want in exchange to their SOL. Shake things up!
          </p>
        </div>
        <form className="mt-12 sm:mt-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pool Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-pink-300">
                Pool Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your pool name"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Pool Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-pink-300">
                Pool Description
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your pool description"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Pool logo url */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-pink-300">
                Pool Logo Url
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter Pool Image Url"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Pool Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-pink-300">
                Pool Deposit Duration (Hours)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="eg. 48 hrs"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Pool Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-pink-300">
                Pool Voting Duration (Hours)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="eg. 24 hrs"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* pool starting date & time */}
            <div>
              <label htmlFor="start-time" className="block text-sm font-medium text-pink-300">
                Pool Start Time
              </label>
              <div className="mt-1">
                <input
                  type="datetime-local"
                  id="start-time"
                  name="start-time"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="eg. 2022-01-01T00:00:00"
                  style={{ color: "blue" }}
                />
              </div>
            </div>
            
            
            {/* Project Enlist Criteria */}
            
          <div className="mt-4 col-span-2">
            <label htmlFor="share-commission" className="block text-sm font-medium text-white-300">
            Project Enlisting Criteria
            </label>
          </div>
           
            {/* Project Criteria (Market Cap) */}
            <div>
              <label htmlFor="market-cap" className="block text-sm font-medium text-pink-300">
                Project Market Cap Requirement
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="market-cap"
                  name="market-cap"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., $5M+"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Project Entry Fee */}
            <div>
              <label htmlFor="project-fee" className="block text-sm font-medium text-pink-300">
                Entry Fee for Projects (SOL)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="project-fee"
                  name="project-fee"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="eg. 10 SOL"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* project airdrop x compate to SOL deposits */}
            <div>
              <label htmlFor="airdrop-fee" className="block text-sm font-medium text-pink-300">
                Minimum airdrop ratio to SOL 
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="airdrop-x"
                  name="airdrop-x"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="eg. 1.7X"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Depositers Criteria */}
            
          <div className="mt-4 col-span-2">
            <label htmlFor="share-commission" className="block text-sm font-medium text-white-300">
            Criteria for Depositers
            </label>
          </div>

            {/* Minimum Deposit */}
            <div>
              <label htmlFor="minimum-deposit" className="block text-sm font-medium text-pink-300">
                Minimum Deposit (SOL)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="minimum-deposit"
                  name="minimum-deposit"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Minimum deposit to join"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Maximum Deposit */}
            <div>
              <label htmlFor="maximum-deposit" className="block text-sm font-medium text-pink-300">
                Maximum Deposit (SOL)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="maximum-deposit"
                  name="maximum-deposit"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Maximum deposit to join"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Set commission */}
            
          <div className="mt-4 col-span-2">
            <label htmlFor="share-commission" className="block text-sm font-medium text-white-300">
           Set Commissions (zero for no commission)
            </label>
          </div>

            {/* Depositor Commission  */}
            <div>
              <label htmlFor="depositor-commission" className="block text-sm font-medium text-pink-300">
                Commission from Deposits (%)
              </label>
              <div className="mt-1">
                <input
                  type="percentage"
                  id="depositor-commission"
                  name="depositor-commission"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Set commission from deposits"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

            {/* Project entry fee commission  */}
            <div>
              <label htmlFor="depositor-commission" className="block text-sm font-medium text-pink-300">
                Commission from entry fee (%)
              </label>
              <div className="mt-1">
                <input
                  type="percentage"
                  id="depositor-commission"
                  name="depositor-commission"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Set commission from Entry fee"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

              {/* Your contribution  */}
              <div>
              <label htmlFor="depositor-commission" className="block text-sm font-medium text-pink-300">
                Your Contribution
              </label>
              <div className="mt-1">
                <input
                  type="percentage"
                  id="depositor-commission"
                  name="depositor-commission"
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Depositers max is your minimum"
                  style={{ color: "blue" }}
                />
              </div>
            </div>

          </div>

        {/* Set commission */}
            
        <div className="mt-4 col-span-2">
            <label htmlFor="share-commission" className="block text-sm font-medium text-yellow-300">
           I understand that I am creating a pool and I am aware of what I am doing.           
            </label>
          </div>

          

          {/* Create Pool Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Create Pool 🎉
            </button>
          </div>
        </form>
     
      </div>
      </div>
  );
};

export default PoolForm;
