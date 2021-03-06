import NP from 'number-precision';
import request from 'request';
import * as Utils from '../utils';
import * as Enums from '../utils/enums';
import CONST_STORAGE from '../constants/storage.json';

const { remote } = require('electron');

const { app } = remote;

export const getSystemSetting: () => System.Setting = () => {
  const { openAtLogin: autoStartSetting } = app.getLoginItemSettings();
  const systemSetting = Utils.GetStorage(CONST_STORAGE.SYSTEM_SETTING, {
    autoStartSetting,
    autoFreshSetting: true,
    freshDelaySetting: 1
  });
  return systemSetting;
};

export const setSystemSetting: (setting: System.Setting) => void = setting => {
  const systemSetting = getSystemSetting();
  Utils.SetStorage(CONST_STORAGE.SYSTEM_SETTING, {
    ...systemSetting,
    ...setting
  });
};

export const getFundApiTypeSetting: () => Enums.FundApiType = () => {
  return Utils.GetStorage(
    CONST_STORAGE.FUND_API_TYPE,
    Enums.FundApiType.Eastmoney
  );
};

export const setFundApiTypeSetting: (
  fundApiType: Enums.FundApiType
) => void = fundApiType => {
  Utils.SetStorage(CONST_STORAGE.FUND_API_TYPE, fundApiType);
};
