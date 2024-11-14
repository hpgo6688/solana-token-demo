
import styles from "./styles/Home.module.css";
import WalletContextProvider from "./components/WalletContextProvider";
import { AppBar } from "./components/AppBar";
import { BalanceDisplay } from "./components/BalanceDisplay";
import { MintToForm } from "./components/MintToForm";
import { CreateTokenAccountForm } from "./components/CreateTokenAccount";
import { CreateMintForm } from "./components/CreateMint";
import './styles/globals.css'
import Record from "./components/Record";
const Home = (props) => {
  return (
    <div className={styles.App}>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <BalanceDisplay />
          <CreateMintForm />
          <CreateTokenAccountForm />
          <MintToForm />
          <Record />
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
