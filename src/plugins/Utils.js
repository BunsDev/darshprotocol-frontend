import AssetLibrary from '../utils/AssetLibrary'
import Converter from '../utils/Converter'
import Approval from '../scripts/Approval'
export default {
    // eslint-disable-next-line no-unused-vars
    install: (app, options) => {
        app.config.globalProperties.$findAsset = (address) => {
            return AssetLibrary.findAsset(address)
        },
        app.config.globalProperties.$otherAssets = (address) => {
            return AssetLibrary.otherAssets(address)
        },
        app.config.globalProperties.$findConjugates = (address, expect = null) => {
            return AssetLibrary.findConjugates(AssetLibrary.findAsset(address).type, expect);
        },
        app.config.globalProperties.$progress = (offer) => {
            return (offer.currentPrincipal / offer.initialPrincipal) * 100;
        },
        app.config.globalProperties.$toMoney = (value, max) => {
            return Converter.toMoney(value, max);
        },
        app.config.globalProperties.$nFormat = (value, digits = 2) => {
            return Converter.nFormatter(value, digits)
        },
        app.config.globalProperties.$fromWei = (value) => {
            return Converter.fromWei(value)
        },
        app.config.globalProperties.$toWei = (value) => {
            return Converter.toWei(value)
        },
        app.config.globalProperties.$approve = async (userAddress, amount, tokenAddress, spender) => {
            return await Approval.approve(userAddress, '1000000000000000000000000000', tokenAddress, spender)
        },
        app.config.globalProperties.$allowanceOf = async (userAddress, tokenAddress, spender) => {
            return await Approval.getAllocationOf(userAddress, tokenAddress, spender)
        }
    }
  }