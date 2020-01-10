import {COUNTER_CHANGE, RESET_COUNTER} from '../constants/index';

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
export function resetCount(count) {
  return {
    type: RESET_COUNTER,
    payload: count,
  };
}
