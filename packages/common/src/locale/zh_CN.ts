import type { RequiredLocale } from '../types';

const localeValues: RequiredLocale = {
  ConnectButton: {
    connect: '连接钱包',
    disconnect: '断开连接',
    copyAddress: '复制地址',
    addressCopied: '地址复制成功！',
    walletAddress: '钱包地址',
  },
  ConnectModal: {
    title: '连接钱包',
    guideTitle: '什么是钱包？',
    guideInfos1Title: '管理私钥和资产',
    guideInfos1Desc: '管理私钥和对应链地址的资产',
    guideInfos2Title: '帮助你连接 DApp',
    guideInfos2Desc: '授权 DApp 获取你的地址，类似登录',
    guideInfos3Title: '调用智能合约',
    guideInfos3Desc: '通过授权私钥签名，发起与链上智能合约的交互',
    guideInfosGetWalletBtnText: '获取钱包',
    guideInfosMoreLinkText: '了解更多',
    getWalletBtnText: '获取',
    getWalletPanelTitle: '获取钱包',
    getWalletPanelInfoTitle: '没有找到你想要的？',
    getWalletPanelInfoDesc: '在左侧选择钱包，以开始使用不同的钱包提供商。',
    qrCodePanelTitleForDownload: '下载 {walletName}',
    qrCodePanelTitleForScan: '使用 {walletName} 扫描',
    qrCodePanelLinkForDownload: '点击前往下载页面',
    qrCodePanelLinkForConnect: '点击直接连接',
    qrCodePanelDownloadTipForReady: '扫描二维码下载钱包',
    qrCodePanelDownloadTipForNotReady: '暂无',
    walletCardPanelTitle: '获取 {selectedWalletName}',
    walletCardAppTitle: '在手机使用 {selectedWalletName}',
    walletCardAppDesc: '使用移动钱包探索以太坊世界。',
    walletCardExtensionTitle: '在 {selectedExtensionBrowserName} 浏览器中使用 {selectedWalletName}',
  },
  NFTCard: {
    actionText: '立即购买',
  },
};

export default localeValues;
