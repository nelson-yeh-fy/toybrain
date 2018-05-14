import store from '../store';

const CFSAPI = {
  CFSList: [
    {
      addon: '2018-04-25T15:22:23.371Z',
      _id: '4dgr42fb01bab7ab4c5a1fd9',
      cfsNumber: '2015-000990',
      cfsStatus: 0,
      cfsDesc: "'Dispatching unit 0310 to CFS2017-00123'",
      addby: "'System'",
      __v: 0,
    },
    {
      addon: '2018-04-25T18:31:57.371Z',
      _id: '4dgs1d9dd489186a6072013f',
      cfsNumber: '2015-000991',
      cfsStatus: 0,
      cfsDesc: "'Dispatching unit 0310 to CFS2017-00123'",
      addby: "'System'",
      __v: 0,
    },
  ],
  all() {
    if (store.cfsInfoList == null) { return this.CFSList; }
    return store.cfsInfoList;
  },
  get(queryId) {
    console.log("queryID:"+queryId + ", store.cfsInfoList:" + store.cfsInfoList);
    const isCFS = p => p._id === queryId;
    if (store.cfsInfoList == null) { console.log("find from local CFSList"); return this.CFSList.find(isCFS); }
    console.log("find from redux cfsInfoList");
    return store.cfsInfoList.find(isCFS);
  },
};

export default CFSAPI;

/*

const CFSAPI = {
  CFSList: [
    {
      addon: '2018-04-25T15:22:23.371Z',
      _id: '5ae09d2fb01bab7ab4c51dd9',
      cfsNumber: '2018-000120',
      cfsStatus: 0,
      cfsDesc: "'Dispatching unit 0310 to CFS2017-00123'",
      addby: "'System'",
      __v: 0,
    },
    {
      addon: '2018-04-25T18:31:57.371Z',
      _id: '5ae0c99dd489186a6072013f',
      cfsNumber: '2018-000122',
      cfsStatus: 0,
      cfsDesc: "'Dispatching unit 0310 to CFS2017-00123'",
      addby: "'System'",
      __v: 0,
    },
  ],
  all() { return this.CFSList; },
  get(queryId) {
    const isCFS = p => p._id === queryId;
    return this.CFSList.find(isCFS);
  },
};

*/
