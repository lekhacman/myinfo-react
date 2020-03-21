import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Info from '../component/Info';
import { fetchMyinfo, goHome } from '../redux/modules/myinfo';

export function Callback(props) {
  const queries = new URLSearchParams(useLocation().search);
  const code = queries.get('code');
  const { loading, data } = props.myinfo;
  useEffect(
    function() {
      props.fetchMyinfo(code);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [code]
  );
  return (
    <main>
      {loading ? (
        <div>loading</div>
      ) : data ? (
        <Info data={data} goHome={props.goHome} />
      ) : null}
    </main>
  );
}

Callback.propTypes = {
  fetchMyinfo: PropTypes.func,
  myinfo: PropTypes.shape({
    err: PropTypes.string,
    loading: PropTypes.bool,
    data: PropTypes.object,
  }),
};

function mapStateToProps(state) {
  return {
    myinfo: state.myinfo,
  };
}

const mapDispatchToProps = {
  fetchMyinfo,
  goHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
