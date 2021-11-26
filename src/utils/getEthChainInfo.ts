export const getEthChainInfo = () => {
    let chainId: number = 56;
    let rpcUrl: string = 'https://bsc-dataseed.binance.org/';
    let ethscanType: string = 'kovan.';
    const href = window.location.href;
    if (/\/\/earn.risq.capital/.test(href)) {
         chainId = 56;
         rpcUrl = 'https://bsc-dataseed.binance.org/';
         ethscanType = '';
    }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
