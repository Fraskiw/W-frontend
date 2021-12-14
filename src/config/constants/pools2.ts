import { QuoteToken, PoolCategory, Pool2Config } from './types'

const pools2: Pool2Config[] = [
  {
    sousId: 1,
    tokenName: 'UST',
    quoteTokenSymbol: QuoteToken.UST,
    stakingTokenName: QuoteToken.UST,
    // this is UST
    stakingTokenAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    quoteTokenPoolAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    contractAddress: {
      1666700000: '0xA144063168d7d08B61D1870eC1AA1030Cb9fC4E8',
      1666600000: '0xA144063168d7d08B61D1870eC1AA1030Cb9fC4E8',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.app.artemisprotocol.one',
    harvest: true,
    tokenPerBlock: '0.3',
    sortOrder: 15,
    isFinished: false,
    isSingleAsset: true,
    isDepositFinished: false,
    startBlock: 19401555,
    endBlock: 20004471,
    lockBlock: 20004471,
    tokenDecimals: 18,
   },
   {
    sousId: 2,
    tokenName: 'RVRS & ONE LP',
    tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    quoteTokenSymbol: QuoteToken.RVRS,
    quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    stakingTokenName: QuoteToken.ONERVRS,
    stakingTokenAddress: '0xCDe0A00302CF22B3Ac367201FBD114cEFA1729b4',
    contractAddress: {
      1666700000: '0xEC7826201c7fCaDBd048C0226c861E1df2759F8D',
      1666600000: '0xEC7826201c7fCaDBd048C0226c861E1df2759F8D',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.app.artemisprotocol.one',
    harvest: true,
    tokenPerBlock: '0.6',
    sortOrder: 16,
    isFinished: false,
    isDepositFinished: false,
    startBlock: 19401555,
    endBlock: 20004471,
    lockBlock: 20004471,
    tokenDecimals: 18,
  },
  {
    sousId: 3,
    tokenName: 'RVRS & UST LP',
    tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    quoteTokenSymbol: QuoteToken.RVRS,
    quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    stakingTokenName: QuoteToken.USTRVRS,
    stakingTokenAddress: '0xF8838fcC026d8e1F40207AcF5ec1DA0341c37fe2',
    contractAddress: {
      1666700000: '0x37B380C2593a172e92a5f0BbAcA3BCfc9091060B',
      1666600000: '0x37B380C2593a172e92a5f0BbAcA3BCfc9091060B',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.app.artemisprotocol.one',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 13,
    isFinished: false,
    isDepositFinished: false,
    startBlock: 19462293,
    endBlock: 19759997,
    lockBlock: 19759997,
    tokenDecimals: 18,
  },
  {
    sousId: 4,
    tokenName: 'RVRS & 1ETH LP',
    tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    quoteTokenSymbol: QuoteToken.RVRS,
    quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
    stakingTokenName: QuoteToken.ETHRVRS,
    stakingTokenAddress: '0xd1af43eb1d14b0377fbe35d2Bfadab16b96c0911',
    contractAddress: {
      1666700000: '0xC5Caf6E573Ccc93dF52bbA0a86593281200780Db',
      1666600000: '0xC5Caf6E573Ccc93dF52bbA0a86593281200780Db',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.app.artemisprotocol.one',
    harvest: true,
    tokenPerBlock: '1.2',
    sortOrder: 14,
    isFinished: false,
    isDepositFinished: false,
    startBlock: 19567881,
    endBlock: 19783882,
    lockBlock: 19783882,
    tokenDecimals: 18,
  },
    {
        sousId: 5,
        tokenName: 'RVRS & UST LP',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.RVRS,
        quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        stakingTokenName: QuoteToken.USTRVRS,
        stakingTokenAddress: '0xF8838fcC026d8e1F40207AcF5ec1DA0341c37fe2',
        contractAddress: {
            1666700000: '0x3987CdF7B31b09d7338A00B4b7eB4f4586de02F8',
            1666600000: '0x3987CdF7B31b09d7338A00B4b7eB4f4586de02F8',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '2.0',
        sortOrder: 8,
        isFinished: false,
        isDepositFinished: false,
        startBlock: 19753637,
        endBlock: 19969638,
        lockBlock: 19969638,
        tokenDecimals: 18,
    },
    {
        sousId: 6,
        tokenName: 'RVRS & USDC LP',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.RVRS,
        quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        stakingTokenName: QuoteToken.USDCRVRS,
        stakingTokenAddress: '0x15B78BEcF030cB136C1dB53b79408BF0483dc1E8',
        contractAddress: {
            1666700000: '0xB654182a34da753fA7E619F45FCE9C4e7338757a',
            1666600000: '0xB654182a34da753fA7E619F45FCE9C4e7338757a',
            },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '1.5',
        sortOrder: 9,
        isFinished: false,
        isDepositFinished: false,
        startBlock: 19753637,
        endBlock: 19969638,
        lockBlock: 19969638,
        tokenDecimals: 18,
    },
    {
        sousId: 7,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
        contractAddress: {
            1666700000: '0xE78DE8375DCAcbf00426d51373936458198f470d',
            1666600000: '0xE78DE8375DCAcbf00426d51373936458198f470d',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        tokenPerBlock: '1.5',
        sortOrder: 10,
        isFinished: false,
        isDepositFinished: false,
        startBlock: 19753637,
        endBlock: 19969638,
        lockBlock: 19969638,
        tokenDecimals: 18,
    },
    {
        sousId: 8,
        tokenName: 'RVRS & UST LP',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.RVRS,
        quoteTokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        stakingTokenName: QuoteToken.USTRVRS,
        stakingTokenAddress: '0xF8838fcC026d8e1F40207AcF5ec1DA0341c37fe2',
        contractAddress: {
            1666700000: '0xC3A77FefFEaB13687dA54A1A600c36B32555B11A',
            1666600000: '0xC3A77FefFEaB13687dA54A1A600c36B32555B11A',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '1.12',
        sortOrder: 1,
        isFinished: false,
        isDepositFinished: false,
        startBlock: 20464386,
        endBlock: 20680387,
        lockBlock: 20680387,
        tokenDecimals: 18,
    },
]

export default pools2
