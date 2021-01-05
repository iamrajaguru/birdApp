import logo from "./icons/Group.png";
import "./App.css";
import birdImg from "./icons/Groupimg.png";
import oximg from "./icons/Screen Shot 2020-12-12 at 02.08 1.png";
import bandImg from "./icons/Screen Shot 2020-12-12 at 02.26 1.png";
import uniImg from "./icons/Screen Shot 2020-12-12 at 02.08 2.png";
import daiImg from "./icons/multi-collateral-dai-dai-logo 3.png";
import decImg from "./icons/Screen Shot 2020-12-12 at 02.26 3.png";
import fileImg from "./icons/Screen Shot 2020-12-12 at 02.26 4.png";
import cosmosImg from "./icons/Screen Shot 2020-12-12 at 02.26 5.png";
import etherImg from "./icons/Screen Shot 2020-12-12 at 02.08 6.png";
import tetherImg from "./icons/Screen Shot 2020-12-12 at 02.08 7.png";
import compImg from "./icons/Screen Shot 2020-12-12 at 02.08 8.png";
import balImg from "./icons/Screen Shot 2020-12-12 at 02.26 2.png";

function App() {
  const item = [
    {
      assets: "Dai",
      apy: "3.0%",
      wallet: "0 Dai",
      img: daiImg,
    },
    {
      assets: "Compound",
      apy: "0.04%",
      wallet: "0 COMP",
      img: compImg,
    },

    {
      assets: "Ox",
      apy: "2.31%",
      wallet: "0 Ox",
      img: oximg,
    },

    {
      assets: "ether",
      apy: "6.63%",
      wallet: "0 ETH",
      img: etherImg,
    },
    {
      assets: "Uniswap",
      apy: "2.47%",
      wallet: "0 UNI",
      img: uniImg,
    },
    {
      assets: "Tether",
      apy: "1.37%",
      wallet: "0 USDT",
      img: tetherImg,
    },
    {
      assets: "Bird",
      apy: "5.40 %",
      wallet: "0 BIRD",
      img: birdImg,
    },
    {
      assets: "Cosmos",
      apy: "5.40 %",
      wallet: "0 ATOM",
      img: cosmosImg,
    },
    {
      assets: "Filecoin",
      apy: "7.6%",
      wallet: "0 FIL",
      img: fileImg,
    },
    {
      assets: "Decentraland",
      apy: "2.39%",
      wallet: "0 MANA",
      img: decImg,
    },
    {
      assets: "Band Protocol",
      apy: "0.31%",
      wallet: "0 BAND",
      img: bandImg,
    },
    {
      assets: "Balancer",
      apy: "3.0%",
      wallet: "0 BAL",
      img: balImg,
    },
  ];
  return (
    <div className="App">
      <div className="root-container">
        <div className="inner-container-1">
          <div className="nav-container">
            <div className="ic_contain">
              <img src={logo} height="38px" width="44px" alt="img" />
              <div className="name_txt">Bird.Money</div>
            </div>
            <div className="nav_group">
              <div className="ic-group">
                Notification <div className="unseen-ellipse"> 4</div>
              </div>
              <div>
                {" "}
                <button className="nav-btn ">Connect Wallet</button>
              </div>
            </div>
          </div>

          <div className="pay_container">
            <div className="net_container">
              <div>
                <div className="circle-design">
                  <div className="text-net">Net APY</div>
                  <div className="net-amount">$ 0.00</div>
                </div>
              </div>
              <div className="cost_container">
                <div>
                  <div className="text-dsg">Borrow Balance</div>
                  <div className="amount_txt">$0.00</div>
                </div>
                <div style={{ marginTop: "36px" }}>
                  <div className="text-dsg">Lending Balance</div>
                  <div className="amount_txt">$0.00</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="progress">
              <div>$0.00</div>
              <div className="bold-line"></div>
              <div>$0.00</div>
            </div>
            <div className="borrow_text">Borrow limit</div>
          </div>
          <div>
            <div className="rating-txt">Bird Rating</div>
            <div className="semi">
              <div>2.0</div>
              <div>Out of 10</div>
            </div>
          </div>
        </div>
        <div className="inner-container-2">
          <div className="menu_nav">
            <div className="options">
              <div>Dashboard</div>
              <div>Farm</div>
              <div>Oracle Analytics</div>
              <div>Governance</div>
            </div>
          </div>
          <div className="tables_coin">
            <table className="table_1">
              <tr>
                <th col={1}>Lending Assets</th>
                <th col={1}>APY</th>
                <th col={1}>Wallets</th>
              </tr>

              {item.map(
                (i) =>
                  i.assets !== "Cosmos" && (
                    <tr key={i.img} className="item_data">
                      <td col={1} className="img_contain">
                        <img src={i.img} className="img-ic" alt={i.assets} />
                        {i.assets}
                      </td>
                      <td col={1}>{i.apy}</td>
                      <td col={1}>{i.wallet}</td>
                    </tr>
                  )
              )}
            </table>
            <table className="table_2">
              <tr>
                <th col={1}>Borrow Assets</th>
                <th col={1}>APY</th>
                <th col={1}>Wallets</th>
              </tr>

              {item.map(
                (i) =>
                  i.assets !== "Bird" && (
                    <tr key={i.apy} className="item_data">
                      <td col={1} className="img_contain">
                        <img src={i.img} className="img-ic" alt={i.assets} />
                        {i.assets}
                      </td>
                      <td col={1}>{i.apy}</td>
                      <td col={1}>{i.wallet}</td>
                    </tr>
                  )
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
