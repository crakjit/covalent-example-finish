function Config() {
    return {
        API_PATH: "https://api.covalenthq.com/v1",
        API_KEY: "ckey_40669559fe5c41eca47d60f2754",
        CHAINS: [
            { chainName: "Ethereum Mainnet", id: 1 },
            { chainName: "Binance Smart Chain", id: 56 }
        ]
    };
}

export const config = Config;