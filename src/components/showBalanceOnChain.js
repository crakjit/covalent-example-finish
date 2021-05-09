import React from "react";
import { Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

export default ({ chainName, item }) => {
    return (
    <div>
        <label key={item.data.chain_id}>{chainName}</label>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ASSETS</th>
                    <th>BALANCES</th>
                    <th>PRICE</th>
                    <th className="text-right">VALUE</th>
                </tr>
            </thead>
            <tbody>
                {item.data.items && item.data.items.map(token => {
                    if (token.balance != 0 || (token.contract_ticker_symbol === "ETH" || token.contract_ticker_symbol === "BNB")) {
                        let logo = null;
                        if (token.logo_url) {
                            logo = (<img src={token.logo_url} alt={token.contract_name} width="20" height="20" />);
                        }
                        return (
                            <tr>
                                <td>{logo}</td>
                                <td>{token.contract_ticker_symbol}</td>
                                <td><NumberFormat value={token.balance/Math.pow(10,token.contract_decimals)} decimalScale={3} thousandSeparator={true} displayType={'text'} /></td>
                                <td><NumberFormat value={token.quote_rate} defaultValue={'$0.00'} prefix={'$'} decimalScale={2} thousandSeparator={true} displayType={'text'} /></td>
                                <td className="text-right"><NumberFormat value={token.quote} prefix={'$'} decimalScale={2} thousandSeparator={true} displayType={'text'} /></td>
                            </tr>
                        );
                    } else {
                        return null;
                    }
                })}
            </tbody>
        </Table>
    </div>
  );
};