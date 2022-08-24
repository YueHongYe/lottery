import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./menu.module.scss";

//主页顶部三个title按钮
const links = [
  {
    name: "Raffles",
    value: "/"
  },
  {
    name: "Create Raffle",
    value: "/create"
  }
]

export const Menu: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <div>
          <a><img src="./home/ins.svg"></img></a>
          <a><img src="./home/twitter.svg"></img></a>
          <a><img src="./home/Vector.svg"></img></a>
        </div>
      </div>
      <div className={styles.link1}>
        <img src="./home/r3.png"></img>
      </div>
      <div className={styles.link2}>
        <div className={styles.links}>
          {links.map((link) => (
            <div className={styles.link} onClick={() => router.push(link.value.toString())} key={link.value}>
              <span>{link.name}</span>
            </div>
          ))}
        </div>
        <WalletMultiButton />
      </div>
    </div>
  );
};
