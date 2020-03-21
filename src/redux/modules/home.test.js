// describe('Home Reducer', function() {});

import { goToSingPass } from './home';

it('should redirec to SingPass', function() {
  const api = { redirect: jest.fn() };

  const closure = goToSingPass({ preventDefault: () => {} });
  closure(null, null, { api });
  expect(api.redirect).toHaveBeenCalledWith(
    'https://test.api.myinfo.gov.sg/com/v3/authorise?client_id=STG2-MYINFO-SELF-TEST&attributes=uinfin,name,sex,race,nationality,dob,email,mobileno,regadd,housingtype,hdbtype,marital,edulevel,noa-basic,ownerprivate,cpfcontributions,cpfbalances&purpose=fun&state=0&redirect_uri=http://localhost:3001/callback'
  );
});
