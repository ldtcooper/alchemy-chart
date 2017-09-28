import { share } from '../util/share_api_util';

export const shareChart = (userId, chartId) => {
  share(userId, chartId);
};
