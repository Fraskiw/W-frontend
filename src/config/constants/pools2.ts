import { QuoteToken, PoolCategory, Pool2Config } from './types'

const UST_ADDRESS = '0x224e64ec1BDce3870a6a6c777eDd450454068FEC'
const JEWEL_ADDRESS = '0x72Cb10C6bfA5624dD07Ef608027E366bd690048F'

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
    sortOrder: 115,
    isFinished: true,
    isSingleAsset: true,
    isDepositFinished: false,
    startBlock: 19401555,
    endBlock: 20004471,
    lockBlock: 20004471,
    tokenDecimals: 18,
    notFinished: false,
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
    sortOrder: 116,
    isFinished: true,
    isDepositFinished: false,
    startBlock: 19401555,
    endBlock: 20004471,
    lockBlock: 20004471,
    tokenDecimals: 18,
    notFinished: false,
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
    sortOrder: 113,
    isFinished: true,
    isDepositFinished: false,
    startBlock: 19462293,
    endBlock: 19759997,
    lockBlock: 19759997,
    tokenDecimals: 18,
    notFinished: false,
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
    sortOrder: 114,
    isFinished: true,
    isDepositFinished: false,
    startBlock: 19567881,
    endBlock: 19783882,
    lockBlock: 19783882,
    tokenDecimals: 18,
    notFinished: false,
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
        sortOrder: 100,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 19753637,
        endBlock: 19969638,
        lockBlock: 19969638,
        tokenDecimals: 18,
        notFinished: false,
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
        sortOrder: 99,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 19753637,
        endBlock: 19969638,
        lockBlock: 19969638,
        tokenDecimals: 18,
        notFinished: false,
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
        sortOrder: 98,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 19753637,
        endBlock: 19969638,
        lockBlock: 19969638,
        tokenDecimals: 18,
        notFinished: false,
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
        sortOrder: 97,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 20464386,
        endBlock: 20680387,
        lockBlock: 20680387,
        tokenDecimals: 18,
        notFinished: false,
    },
    {
        sousId: 9,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
        contractAddress: {
            1666700000: '0x8F2608506515337d04a900a207C01F9D7c6002C1',
            1666600000: '0x8F2608506515337d04a900a207C01F9D7c6002C1',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '0.6',
        sortOrder: 96,
        isSingleAsset: true,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 20740868,
        endBlock: 20956869,
        lockBlock: 20956869,
        tokenDecimals: 18,
        notFinished: false,
    },
    {
        sousId: 10,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
        contractAddress: {
            1666700000: '0x2F817863b8aAaC4E478C7444008921326965Ca3e',
            1666600000: '0x2F817863b8aAaC4E478C7444008921326965Ca3e',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '0.9',
        sortOrder: 95,
        isSingleAsset: true,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 21017868,
        endBlock: 21233869,
        lockBlock: 21233869,
        tokenDecimals: 18,
        notFinished: false,
    },
    {
        sousId: 11,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0x9B43bE9a47A530Fb00868c9AfA99aE3b99BBC7B6',
            1666600000: '0x9B43bE9a47A530Fb00868c9AfA99aE3b99BBC7B6',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '0.7',
        sortOrder: 94,
        isSingleAsset: true,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 21293135,
        endBlock: 21509136,
        lockBlock: 21509136,
        tokenDecimals: 18,
        notFinished: true,
    },
    {
        sousId: 12,
        tokenName: 'JEWEL',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.JEWEL,
        quoteTokenPoolAddress: JEWEL_ADDRESS,
        stakingTokenName: QuoteToken.JEWEL,
        stakingTokenAddress: JEWEL_ADDRESS,
        contractAddress: {
            1666700000: '0xE098d1848C38148405c9D9b6aB34d9b4F1AE7731',
            1666600000: '0xE098d1848C38148405c9D9b6aB34d9b4F1AE7731',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '0.15',
        sortOrder: 93,
        isSingleAsset: true,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 21564776,
        endBlock: 21780777,
        lockBlock: 21780777,
        tokenDecimals: 18,
        notFinished: true,
    },
    {
        sousId: 13,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0xBE4E60715d8912de4A13F31222646484389ca544',
            1666600000: '0xBE4E60715d8912de4A13F31222646484389ca544',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '0.35',
        sortOrder: 92,
        isSingleAsset: true,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 21564776,
        endBlock: 21780777,
        lockBlock: 21780777,
        tokenDecimals: 18,
        notFinished: true,
    },
    {
        sousId: 14,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0x37A794d1138963ab92C64FcAD9A081435372cE0E',
            1666600000: '0x37A794d1138963ab92C64FcAD9A081435372cE0E',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        tokenPerBlock: '0.83',
        sortOrder: 91,
        isSingleAsset: true,
        isFinished: true,
        isDepositFinished: false,
        startBlock: 21823785,
        endBlock: 22039786,
        lockBlock: 22039786,
        tokenDecimals: 18,
        notFinished: true,
    },
    {
        sousId: 15,
        sortOrder: 90,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0x7EEE62A9b38C4580ee158e0a839b9541E35C694B',
            1666600000: '0x7EEE62A9b38C4580ee158e0a839b9541E35C694B',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: true,
        tokenPerBlock: '0.40',
        startBlock: 22115204,
        endBlock: 22331205,
        lockBlock: 22331205,
        tokenDecimals: 18,
    },
    {
        sousId: 16,
        sortOrder: 89,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0xAC4cb04ab4BeF3EAA91267ec4129f731844F1adB',
            1666600000: '0xAC4cb04ab4BeF3EAA91267ec4129f731844F1adB',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: true,
        tokenPerBlock: '0.13',
        startBlock: 22402033,
        endBlock: 22618034,
        lockBlock: 22618034,
        tokenDecimals: 18,
    },
    {
        sousId: 17,
        sortOrder: 88,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0xdA5124bbd00500A035950C2bAAf82aa32464dD11',
            1666600000: '0xdA5124bbd00500A035950C2bAAf82aa32464dD11',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: true,
        tokenDecimals: 18,
        tokenPerBlock: '0.088',
        startBlock: 22689063,
        endBlock: 22905064,
        lockBlock: 22905064,
    },
    {
        sousId: 18,
        sortOrder: 87,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0x49cc5f358AB064174Bd5440bCf09B075dBfeB1d5',
            1666600000: '0x49cc5f358AB064174Bd5440bCf09B075dBfeB1d5',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: true,
        tokenDecimals: 18,
        tokenPerBlock: '0.028',
        startBlock: 22979960,
        endBlock: 23195961,
        lockBlock: 23195961,
    },
    {
        sousId: 19,
        sortOrder: 86,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0xAC1f9afD2fc5AE09062c56cC42B590DD1682C6F4',
            1666600000: '0xAC1f9afD2fc5AE09062c56cC42B590DD1682C6F4',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: true,
        tokenDecimals: 18,
        tokenPerBlock: '0.029',
        startBlock: 23527509,
        endBlock: 23743510,
        lockBlock: 23743510
    },
    {
        sousId: 20,
        sortOrder: 85,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0xec070ea1C6aaC34c14156d7F631C4Ce079E0CE80',
            1666600000: '0xec070ea1C6aaC34c14156d7F631C4Ce079E0CE80',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: true,
        tokenDecimals: 18,
        tokenPerBlock: '0.043',
        startBlock: 23785238,
        endBlock: 24001239,
        lockBlock: 24001239
    },
    {
        sousId: 21,
        sortOrder: 84,
        tokenName: 'UST',
        tokenPoolAddress: '0xED0B4b0F0E2c17646682fc98ACe09feB99aF3adE',
        quoteTokenSymbol: QuoteToken.UST,
        quoteTokenPoolAddress: UST_ADDRESS,
        stakingTokenName: QuoteToken.UST,
        stakingTokenAddress: UST_ADDRESS,
        contractAddress: {
            1666700000: '0x6DD8C012C4435e6F3c4A3E4F2986cD67870A109A',
            1666600000: '0x6DD8C012C4435e6F3c4A3E4F2986cD67870A109A',
        },
        poolCategory: PoolCategory.CORE,
        projectLink: '',
        harvest: true,
        isSingleAsset: true,
        isDepositFinished: false,
        notFinished: true,
        isFinished: false,
        tokenDecimals: 18,
        tokenPerBlock: '0.047',
        startBlock: 24063542,
        endBlock: 24279543,
        lockBlock: 24279543,
    }
]

export default pools2
