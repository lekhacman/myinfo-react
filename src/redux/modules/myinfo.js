import { push } from 'connected-react-router';
import { equals, evolve, filter, map, path, pipe, prop, type } from 'ramda';
// Actions
export const FETCH_SUCCESS = 'myinfo/detail/FETCH_SUCCESS';
export const FETCH_ERROR = 'myinfo/detail/FETCH_ERROR';
export const FETCHING = 'myinfo/detail/FETCHING';
export const CLEAR_DATA = 'myinfo/detail/CLEAR_DATA';

// Reducers
const initState = {
  err: null,
  loading: false,
  data: null,
};
export default function reducer(state = initState, action) {
  const handler = {
    [FETCH_SUCCESS]: handleFetchSuccess,
    [FETCH_ERROR]: handleFetchError,
    [FETCHING]: fetching,
    [CLEAR_DATA]: clearData,
  };

  return handler.hasOwnProperty(action.type) ? handler[action.type]() : state;

  function handleFetchSuccess() {
    return {
      ...state,
      data: { ...action.data },
      loading: false,
    };
  }

  function handleFetchError() {
    return {
      ...state,
      err: action.err.message,
      loading: false,
      data: null,
    };
  }

  function fetching() {
    return {
      ...state,
      loading: true,
    };
  }

  function clearData() {
    return {
      ...initState,
    };
  }
}

// Action creators

export const fetchMyinfo = (function(transform) {
  return function fetchMyinfo(authorizationCode) {
    return function(dispatch, _, { api }) {
      dispatch({ type: FETCHING });
      return api.myApi
        .myinfo(authorizationCode)
        .then(transform)
        .then(
          function(data) {
            dispatch({ type: FETCH_SUCCESS, data });
          },
          function(err) {
            dispatch({ type: FETCH_ERROR, err });
          }
        );
    };
  };
})(
  evolve({
    uinfin: prop('value'),
    name: prop('value'),
    sex: prop('desc'),
    race: prop('desc'),
    nationality: prop('desc'),
    dob: prop('value'),
    email: prop('value'),
    mobileno: path(['nbr', 'value']),
    regadd: pipe(
      filter(pipe(type, equals('Object'))),
      map(prop('value')),
      addr =>
        `#${addr.unit}-${addr.floor} Blk ${parseInt(addr.block, 10) || ''} ${
          addr.street
        }, S${addr.postal}`
    ),
    housingtype: prop('desc'),
    marital: prop('desc'),
    edulevel: prop('desc'),
    'noa-basic': path(['amount', 'value']),
  })
);

export function goHome(event) {
  return function clearState(dispatch) {
    event.preventDefault();
    dispatch({ type: CLEAR_DATA });
    dispatch(push('/'));
  };
}
