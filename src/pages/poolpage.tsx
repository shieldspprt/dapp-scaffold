import type { NextPage } from "next";
import Head from "next/head";

const Ppage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poolparty.finance</title>
        <meta
          name="description"
          content="Join the next generation of decentralized finance with our competitive platform on Solana. Deposit and vote for your favorite projects while earning exclusive token airdrops. A gamified experience for both new and established projects with a focus on community engagement and revenue sharing."
        />
      </Head>
        {/* add pool banner image and pool description here in the center of the page.  */}
        <div>
          <div className="flex items-center justify-center">
            <img src="https://img.freepik.com/free-photo/3d-modern-data-techncology-network-communications-design_1048-16342.jpg" className="w-24 h-24 rounded-full object-cover" style={{ opacity: '0.9', marginTop: '30px' }} /> 
          </div>
          <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            MUSKarmy
          </h1>
          <p className="text-center mx-auto font-light max-w-md" style={{ marginBottom: '20px' }}>
            <a href="/projectpage" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:underline">Participate as Project</a>
          </p>
        </div>

      {/* deposit form */}
      <div className="flex items-center justify-center">
        <form className="bg-gray-800 rounded px-8 pt-6 pb-8 mb-4 space-y-6 w-1/2">
          {/* Deposit Amount */}
          <div>
            <label htmlFor="deposit-amount" className="block text-sm font-medium text-pink-300">
              Deposit Amount (SOL)
            </label>
            <input
              type="number min=0.1 max=0.5"
              style={{ color: "blue" }}
              id="deposit-amount"
              name="deposit-amount"
              className="block w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="0.1 - 0.5 SOL"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Deposit SOL
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 float-right"
            >
              Withdraw SOL
            </button>
          </div>
          
        </form>
      </div>


      {/* stats */}
      <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            Pool Stats
          </h2>
      <div className="stats-grid">
              <div className="stats-grid-item">
                <h2>2517 </h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Numbers of address deposited in the pool.</p>
              </div>
              <div className="stats-grid-item">
                <h2> 714 </h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Total SOL in the pool.</p>
              </div>
              <div className="stats-grid-item">
                <h2>4 </h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Numbers of projects participating in the pool. </p>
              </div>
              <div className="stats-grid-item">
                <h2>17</h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Number of pools created by this creator. </p>
              </div>
            </div>
     
      {/* cards */}
     
     <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            Projects Participating in MUSKarmy pool
          </h2>
      <div className="stats-grid-container">
        <div className="stats-grid">
            <div className="stats-grid-item" >
            <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480196.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>WAGMI<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">Visit Dex </a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>WAGMI is a decentralized social network built on the Solana blockchain, with a vibrant community of over 3 million active profiles. Founded on the principles of decentralization, transparency, and user-driven innovation, WAGMI is a platform where users can connect, share, and collaborate on a wide range of topics.</p>
          <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold'}}>Offering 1.7x </p>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>MarketCap: 3.1M</p>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Token Name: WAG</p>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px', fontWeight: 'bold' }}>Project Started : 01/01/2021</p>
          <button 
            className="participate-btn" 
            onClick={(e) => {
              const count = Number(localStorage.getItem('voteCount') || 0) + 1;
              localStorage.setItem('voteCount', count.toString());
              (e.target as HTMLButtonElement).textContent = `Vote Count: ${count}`;
            }}>
            Vote Count: {localStorage.getItem('voteCount') || 0}
          </button>
          </div>
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>Ex-tribe<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">Visit Dex</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ex-Tribe is a community-driven Solana meme coin that's all about embracing the chaos and unpredictability of the crypto space. Born out of the ashes of a failed tribe, Ex-Tribe is a tongue-in-cheek nod to the wild west of cryptocurrency.</p>
          <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold'}}>Offering 1.44X</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>MarketCap: 1.8M</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Token Name: EXTR</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px',fontWeight: 'bold' }}>Project Started : 01/01/2021</p>
            <button 
            className="participate-btn" 
            onClick={(e) => {
              const count = Number(localStorage.getItem('Ex-tribe') || 0) + 1;
              localStorage.setItem('Ex-tribe', count.toString());
              (e.target as HTMLButtonElement).textContent = `Vote Count: ${count}`;
            }}>
            Vote Count: {localStorage.getItem('Ex-tribe') || 0}
          </button>
            
          </div>
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>Mibone<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">Visit Dex</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Mibone is a revolutionary AI-based cryptocurrency built on the Solana blockchain. Inspired by the cutting-edge advancements in artificial intelligence, Mibone aims to leverage the power of AI to create a more efficient, secure, and decentralized financial system.</p>
          <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold'}}>Offering 1.65X</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>MarketCap: 2.2M</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Token Name: MIB</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px',fontWeight: 'bold' }}>Project Started : 01/01/2021</p>
            <button 
            className="participate-btn" 
            onClick={(e) => {
              const count = Number(localStorage.getItem('Mibone') || 0) + 1;
              localStorage.setItem('Mibone', count.toString());
              (e.target as HTMLButtonElement).textContent = `Vote Count: ${count}`;
            }}>
            Vote Count: {localStorage.getItem('Mibone') || 0}
          </button>            
          </div>
         
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691943.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>Nerdy<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">Visit Dex</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Serum is a decentralized exchange built on Solana.</p>
          <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold'}}>Offering 1.2X</p>
          <p style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold'}}>Deposited: NRD 1.2M</p>

            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>MarketCap: $1.2M</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px', fontWeight: 'bold' }}>Project Started : 01/01/2021</p>
            <button 
            className="participate-btn" 
            onClick={(e) => {
              const count = Number(localStorage.getItem('Nerdy') || 0) + 1;
              localStorage.setItem('Nerdy', count.toString());
              (e.target as HTMLButtonElement).textContent = `Vote Count: ${count}`;
            }}>
            Vote Count: {localStorage.getItem('Nerdy') || 0}
          </button>
          </div>
        </div>
      </div>
        
     
      </div>
    
  );
};

export default Ppage;
