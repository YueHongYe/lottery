import { BN, ProgramAccount } from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Raffle from "../src/components/raffle/raffle";
import { ContractContext } from "../src/context/contract";
import styles from "../styles/home.module.scss";
import Loading from "../src/components/loading";
import Image from "next/image";


function arrToTwoDim(arr: any, n = 4) {
  let arr2: any = []
  for (let i = 0, j = 0; i < arr.length; i += n) {
    arr2[j] = []
    for (let k = 0; k < n; k++) {
      if (i + k < arr.length)
        arr2[j].push(arr[i + k])
    }
    j++
  }
  return arr2
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
    console.log('already out!');
    return (
      <div>It's over</div>
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


const Home: NextPage = () => {
  const [raffles, setRaffles] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [homeshow, setHomeShow] = useState([
    {
      img: '/home/666.png',
      price: '11',
      entries: '222',
      date: '09/24/2022 11:23:37 AM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '22',
      entries: '222',
      date: '09/11/2022 4:01:59 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '33',
      entries: '222',
      date: '10/11/2022 3:21:54 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '44',
      entries: '222',
      date: '11/11/2022 6:31:36 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '555',
      entries: '222',
      date: '06/11/2023 5:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '666',
      entries: '222',
      date: '06/11/2023 4:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '777',
      entries: '222',
      date: '06/11/2023 3:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '888',
      entries: '222',
      date: '06/11/2023 1:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '999',
      entries: '222',
      date: '06/11/2023 5:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '000',
      entries: '222',
      date: '06/11/2023 4:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '001',
      entries: '222',
      date: '06/11/2023 3:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '002',
      entries: '222',
      date: '06/11/2023 1:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '003',
      entries: '222',
      date: '06/11/2023 5:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '004',
      entries: '222',
      date: '06/11/2023 4:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '005',
      entries: '222',
      date: '06/11/2023 3:11 PM',
      smb: '333'
    },
    {
      img: '/home/666.png',
      price: '006',
      entries: '222',
      date: '06/11/2023 1:11 PM',
      smb: '333'
    }
  ])
  const [show, setShow] = useState([])
  const [showIndex, setShowIndex] = useState(0)
  const [dates, setDates] = useState(new Date())
  const [pages, setPages] = useState(['Recently Added', 'Expiring Soon', 'Selling out soon', 'Expiring Soon'])
  const [ogone, setOgone] = useState([])
  useEffect(() => {
    let aaa = arrToTwoDim(homeshow, 4)
    setShow(aaa[showIndex])
  }, [showIndex, homeshow])

  useEffect(() => {
    const times = setInterval(() => {
      let a: any = new Date()
      setDates(a)
    }, 1000);

    return () => {
      clearInterval(times)
    }
  }, [])
  const opentitle = () => {
    let div: any = document.querySelector('#ul');
    let height = div.scrollHeight.toString() + "px";
    let span1: any = document.querySelector('.span1')
    span1.style.transform = 'translate(0%,-50%)'
    if (div.style.height === height) {
      div.style.height = 0;
      span1.style.transform = 'translate(0%,-50%) rotate(-90deg)'
    } else {
      div.style.height = height;
    }
  }
  const closeAndChange = (e: any) => {
    let div: any = document.querySelector('#ul')
    let istitle: any = document.querySelector('.istitle')
    istitle.innerText = e.target.innerText
    console.log(istitle);
    div.style.height = 0;
    let aa: any = ogone
    aa.push(e.target.innerText)
    setOgone(aa)
  }
  const del = (name: any) => {
    let aa: any = ogone
    for (let i = 0; i < aa.length; i++) {
      if (aa[i] == name) {
        aa.splice(i, 1)
      }
    }
    setOgone(aa)
  }


  const program = useContext(ContractContext);

  const fetchRaffles = async () => {
    if (!program) return;
    console.log(program.program)
    const data = await program.program.account.raffle.all();
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Accounts: ", data);
    setRaffles(
      data.map((account) => (
        <Raffle
          key={account.publicKey.toString()}
          account={{
            author: account.account.authority,
            title: account.account.title,
            description: account.account.description,
            fee: 0,
            ends: account.account.ends.toNumber(),
            winNftUrl: account.account.winNftUrl,
            winNftPubkey: account.account.winNftUrl,
          }}
          publicKey={account.publicKey}
        />
      ))
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchRaffles();
  }, [program]);

  return (
    <div className={styles.container}>
      <Head>
        <meta property="og:title" content={'DAOify Raffles'} key="ogtitle" />
        <meta property="og:description" content={'Create & Participate in raffles on Solana, brought to you by DAOify'} key="ogdesc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reactiv3 Nft Raffle</title>
      </Head>
      <div className={styles.home_img}>
        <img src="/home-logo.png"
          // height='100%'
          // width='100%'
          // alt="sss"
        ></img>
        <div className={styles.home_page}>Your NFT collection short description in about ten-eleven words.</div>
        <div className={styles.home_show}>
          <div>
            {
              show && show.map((item: any, index) => {
                return (
                  <div key={index}>
                    <img src={item.img} 
                      height='100%'
                      width='100%'></img>
                    <div className={styles.price}>${item.price}</div>
                    <div className={styles.bottom}>
                      <div>
                        <div>SMB : {item.smb}</div>
                        <div>ENTRIES : {item.entries}</div>
                      </div>
                      <div>
                        {CountDownTimer(item.date, dates)}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div>
            {
              [1, 1, 1, 1].map((item, index) => {
                return (
                  <span
                    key={index}
                    style={showIndex == index ? { backgroundColor: '#D9D9D9' } : { backgroundColor: '#999999' }}
                    onClick={() => setShowIndex(index)}
                  ></span>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className={styles.home_rf}>
        <div className={styles.home_rf_left}>
          {loading ? (<Loading loading={loading} />) : (raffles && raffles)}
        </div>
        <div className={styles.home_rf_right}>
          <h1>token</h1>
          <div className={styles.mint}>
            {
              ogone && ogone.map((item, index) => {
                return (
                  <span key={index}>{item}&nbsp;&nbsp;<span onClick={() => del(item)}>X</span></span>
                )
              })
            }
          </div>
          <div className={styles.maxt} onClick={() => opentitle()}><div className="istitle"></div><span className='span1'></span></div>
          <ul className={styles.ul} id='ul'>
            {
              pages && pages.map((item, index) => {
                return (
                  <li key={index} onClick={(e) => closeAndChange(e)}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
