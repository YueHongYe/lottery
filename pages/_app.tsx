import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { AppProps } from "next/app";
import { FC, useEffect, useMemo } from "react";
// import { Toaster } from "react-hot-toast";
import { Menu } from "../src/components/menu/menu";
import { ContractProvider } from "../src/context/contract";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.scss");

const App: FC<AppProps> = ({ Component, pageProps }) => {

  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = 'https://ssc-dao.genesysgo.net/'
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  useEffect(()=>{
      rem()
    window.onresize=()=>{
      rem()
    }
  },[])

  const rem = () => {
    let winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
    if (winWidth < 500) {
      winWidth = 500
    }else if(winWidth > 2000){
      winWidth = 1500
    }
    let oHtml = document.getElementsByTagName('html')[0]
    oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ContractProvider>
            {/* <Toaster/> */}
            <Menu />
            <Component {...pageProps} />
          </ContractProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
