import { FC } from "react";
import styles from './raffle.module.scss';
import { PublicKey } from '@solana/web3.js';
import { useRouter } from "next/router";
import { useState } from "react";

type RaffleType = {
    account: {
        author: PublicKey;
        ends: number;
        title: string;
        description: string;
        fee: number;
        winNftUrl: string;
        winNftPubkey: string;
    }
    publicKey: PublicKey
}

function CountDownTimer(ends: any, nows: any) {

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let end: any = new Date(ends);
    let now: any = new Date(nows);
    let distance = end - now;
    if (distance <= 0) {
        console.log(end);

        console.log('already out!');
        return (
            <div>It`s over</div>
        )
    }
    let days = (Math.floor(distance / _day) < 10 ? '0' + Math.floor(distance / _day) : Math.floor(distance / _day));
    let hours = (Math.floor((distance % _day) / _hour) < 10 ? '0' + Math.floor((distance % _day) / _hour) : Math.floor((distance % _day) / _hour));
    let minutes = (Math.floor((distance % _hour) / _minute) < 10 ? '0' + Math.floor((distance % _hour) / _minute) : Math.floor((distance % _hour) / _minute));
    let seconds = (Math.floor((distance % _minute) / _second) < 10 ? '0' + Math.floor((distance % _minute) / _second) : Math.floor((distance % _minute) / _second));

    return (
        <div className={styles.dates}>
            <span>{days}</span>
            <span>{hours}</span>
            <span>{minutes}</span>
            <span>{seconds}</span>
        </div>
    )
}

const Raffle: FC<RaffleType> = ({ account, publicKey }) => {

    const router = useRouter();
    const [dates, setDates] = useState(new Date())

    return (
        <div className={styles.container}>
            <div className={styles.price}>$30</div>
            <div className={styles.image}>
                <img src={account.winNftUrl} draggable={false} alt="" />
                <div className={styles.time}>{CountDownTimer(account.ends, dates)}</div>
            </div>
            <div className={styles.imgpage}>
                <div>SMB : {account.title}</div>
                <div>ENTRIES : {account.description}</div>
            </div>
            <div className={styles.footer_button} onClick={() => router.push(`/raffle/${publicKey.toString()}`)}>
                MORE INFO
            </div>
        </div>
    )

}

export default Raffle;
