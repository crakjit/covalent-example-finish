import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowBalanceOnChain from "./showBalanceOnChain";
import {config} from './../config';

const showBalance = (address, setOutput) => {
  let conf = config();
  let promises = [];
  let outputs = [];

  conf.CHAINS.forEach(chain => {
    promises.push(
      axios.get(`${conf.API_PATH}/${chain.id}/address/${address}/balances_v2/?key=${conf.API_KEY}`).then(response => {
        outputs.push(response.data);
      }).catch(err => console.log(err))
    );
  });
  Promise.all(promises).then(() => {
    setOutput(outputs);
  });
};

const getChainName = (id) => {
  let conf = config();
  let chanin = conf.CHAINS.filter(chain => chain.id === id)[0];
  if (chanin) {
    return chanin.chainName;
  }
  return "Invalid Chain";
}

export default ({ address }) => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    if (!address) {
      return;
    }

    showBalance(address, setOutput);
  }, [address]);

  return (
    <div>
      <label className="label">ASSETS</label>
      {output.map(item => {
        return (<ShowBalanceOnChain chainName={getChainName(item.data.chain_id)} item={item} />);
      })}
    </div>
  );
};
