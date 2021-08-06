import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import Logo from "../assets/logo.png";
import parse from "html-react-parser";
import BinanceWallet from "../assets/wallet/binance-wallet.png";
import MathWallet from "../assets/wallet/math-wallet.png";
import MetaMask from "../assets/wallet/meta-mask.png";
import TokenPocket from "../assets/wallet/token-pocket.png";
import TrustWallet from "../assets/wallet/trust-wallet.png";
import WalletConnect from "../assets/wallet/wallet-connect.png";
import BinanceIcon from "../assets/binance-icon.png";
import CakeIcon from "../assets/cake-icon.png";

export default {
  wallet : [
    {
      name:"Metamask",
      icon:<MetaMask/>,
      link:"#"
    },
    {
      name:"TrustWallet",
      icon:<TrustWallet/>,
      link:"#"
    },
    {
      name:"MathWallet",
      icon:<MathWallet/>,
      link:"#"
    },
    {
      name:"TokenPocket",
      icon:<TokenPocket/>,
      link:"#"
    },
    {
      name:"WalletConnect",
      icon:<WalletConnect/>,
      link:"#"
    },
    {
      name:"Binance Chain",
      icon:<BinanceWallet/>,
      link:"#"
    },
  ],
  navbar: {
    logo: Logo,
    menu: [
      {
        label: "Home",
        path: "/",
        icon: <FaIcons.FaHome className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "About",
        path: "/about",
        icon: <RiIcons.RiErrorWarningFill className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Trade",
        path: "/trade",
        icon: <IoIcons.IoIosSwap className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Rasino",
        path: "#",
        icon: <AiIcons.AiFillDollarCircle className="inline-block" />,
        parent: true,
        child: [],
      },
      {
        label: "Farms",
        path: "#",
        icon: <RiIcons.RiCoinLine className="inline-block" />,
        parent: true,
        child: [
          {
            path: "/farms/mr-rasta",
            label: "Mr. Rasta",
          },
          {
            path: "/farms/mrs-rasta",
            label: "Mrs. Rasta",
          },
        ],
      },
      {
        label: "Pools",
        path: "#",
        icon: <GiIcons.GiTwoCoins className="inline-block" />,
        parent: true,
        child: [
          {
            path: "#",
            label: "Mr. Rasta",
          },
          {
            path: "#",
            label: "Mrs. Rasta",
          },
        ],
      },
      {
        label: "Top Launch Pad",
        path: "#",
        icon: <AiIcons.AiFillStar className="inline-block" />,
        parent: false,
        child: [],
      },
      {
        label: "Community",
        path: "#",
        icon: <Io5Icons.IoChatboxEllipsesOutline className="inline-block" />,
        parent: true,
        child: [
          {
            path: "#",
            label: "Telegram",
          },
          {
            path: "#",
            label: "Coin Market Cap",
          },
          {
            path: "#",
            label: "Whitepaper",
          },
          {
            path: "#",
            label: "Medium",
          },
          {
            path: "#",
            label: "Dapp Radar",
          },
          {
            path: "#",
            label: "Chart",
          },
        ],
      },
      {
        label: "Contact",
        path: "/contact/",
        icon: <FaIcons.FaPhone className="inline-block transform rotate-90" />,
        parent: false,
        child: [],
      },
    ],
    myProfileMenu: [],
  },
  coinList : [
    {
      label:'BNB',
      icon:<BinanceIcon/>,
    },
    {
      label:'BTCB',
      icon:<CakeIcon/>,
    },
    {
      label:'BUSD',
      icon:<BinanceIcon/>,
    },
    {
      label:'CAKE',
      icon:<CakeIcon/>,
    },
    {
      label:'CNS',
      icon:<BinanceIcon/>,
    },
    {
      label:'DAI',
      icon:<CakeIcon/>,
    },
    {
      label:'DOT',
      icon:<BinanceIcon/>,
    },
    {
      label:'ETH',
      icon:<CakeIcon/>,
    },
    {
      label:'MRASTA',
      icon:<BinanceIcon/>,
    },
    {
      label:'RASTA',
      icon:<CakeIcon/>,
    },
    {
      label:'USDT',
      icon:<BinanceIcon/>,
    },
    {
      label:'WBNB',
      icon:<CakeIcon/>,
    }
  ],
  footer: {
    logo: Logo,
    textUnderLogo: ["@rastafinance", "www.rasta.finance"],
    navigation: [
      {
        title: "Useful Links",
        item: [
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
          { label: "Farms", path: "#" },
        ],
      },
      {
        title: "Farms",
        item: [
          { label: "Mr. Rasta", path: "/farms/mr-rasta" },
          { label: "Mrs. Rasta", path: "/farms/mrs-rasta" },
        ],
      },
    ],
    copyRight: parse(
      '<a href="#" class="text-yellow-rasta">Rasta Finance</a> 2021 // All Right Reserved'
    ),
  },
  socialMedia: [
    { name: "Twitter", icon: <FaIcons.FaTwitter />, link: "#" },
    { name: "Tik Tok", icon: <Io5Icons.IoLogoTiktok />, link: "#" },
    { name: "Instagram", icon: <FaIcons.FaInstagram />, link: "#" },
    { name: "Telegram", icon: <FaIcons.FaTelegramPlane />, link: "#" },
    { name: "Reddit", icon: <FaIcons.FaReddit />, link: "#" },
    { name: "Medium", icon: <FaIcons.FaMediumM />, link: "#" },
    { name: "Youtube", icon: <FaIcons.FaYoutube />, link: "#" },
  ],
};
