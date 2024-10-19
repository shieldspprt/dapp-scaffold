import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";


const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Poolparty.finance</title>
        <meta
          name="description"
          content="Join the next generation of decentralized finance with our competitive platform on Solana. Deposit and vote for your favorite projects while earning exclusive token airdrops. A gamified experience for both new and established projects with a focus on community engagement and revenue sharing."
        />
      </Head>

      <HomeView> 
      
      </HomeView>
      {/* stats */}
      <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            Pools Stats
          </h2>
      <div className="stats-grid">
              <div className="stats-grid-item">
                <h2>2517 </h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Total number of pools created.</p>
              </div>
              <div className="stats-grid-item">
                <h2> 714,000</h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Total SOL Deposited.</p>
              </div>
              <div className="stats-grid-item">
                <h2>1,000,000 SOL </h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Total Value Distributed in Airdrops. </p>
              </div>
              <div className="stats-grid-item">
                <h2>1435 </h2>
                <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Total number of creators. </p>
              </div>
            </div>
     
      {/* cards */}
     
     <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            Available pools
          </h2>
      <div className="stats-grid-container">
        <div className="stats-grid">
            <div className="stats-grid-item" >
            <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480196.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>WAGMI<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Raydium is an AMM built on Solana.</p>
            <p>Min-Max: 100-10,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 2 days</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
          </div>
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>MUSKarmy<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Orca is a decentralized exchange built on Solana.</p>
            <p>Min-Max: 50-5,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 1 day</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>

          </div>
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>FUD Fighters<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Orca is a decentralized exchange built on Solana.</p>
            <p>Min-Max: 50-5,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 1 day</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
            </div>
         
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691943.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>HODL Haven<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Serum is a decentralized exchange built on Solana.</p>
            <p>Min-Max: 20-2,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 3 days</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
          </div>
        </div>
      </div>

      <div className="stats-grid-container">
        <div className="stats-grid">
            <div className="stats-grid-item" >
            <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480196.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>MemeLord's Vault<span style={{float: 'right'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Raydium is an AMM built on Solana.</p>
            <p>Min-Max: 100-10,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 2 days</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
          </div>
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>CryptoCrazies<span style={{float: 'right', fontSize: '11px'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>A name that leans into the wild and unpredictable nature of the crypto market.</p>
            <p>Min-Max: 50-5,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 1 day</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
          </div>
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611173.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>Satoshi's Soup<span style={{float: 'right', fontSize: '11px'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>A whimsical name that references the mysterious creator of Bitcoin, Satoshi Nakamoto, and adds a playful twist with "soup".</p>
            <p>Min-Max: 50-5,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 1 day</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
          </div>
         
          <div className="stats-grid-item" >
          <div style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-financial-neon-bull_23-2151691943.jpg)', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', marginBottom: '15px' }}></div>

          <h2>LunarTards<span style={{float: 'right', fontSize: '11px'}}><a href="https://twitter.com/explorer" target="_blank" rel="noopener noreferrer">@Creator</a></span></h2>
          <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>A playful name that combines the idea of lunar cycles with a dash of internet meme culture.</p>
            <p>Min-Max: 20-2,000 SOL</p>
            <p style={{ wordBreak: 'break-word' , color: 'grey', fontSize: '12px' }}>Ends: 3 days</p>
            <button className="participate-btn" onClick={() => window.location.href='/poolpage'}>Participate</button>
          </div>
        </div>
      </div>

      </div>
    
  );
};

export default Home;
