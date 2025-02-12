import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <img src="/solanaLogo.png" height={30} width={200} />
      <span>Token Program</span>
      <WalletMultiButton />
    </div>
  );
};
