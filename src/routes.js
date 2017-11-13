import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {AppContainer} from './containers/app.container.jsx';
import LenderSection from './components/lender/lenderSection.component.jsx';
import Index from './components/index.jsx';
import notFound from './components/shared/404.component.jsx';
import accountActivation from './components/accountActivation.component.jsx';
import changePassword from './components/lender/changePassword.component.jsx';
import resetPassword from './components/resetPassword.component.jsx';
import dashboard from './components/lender/dashboard.component.jsx';
import lenderChoice from './components/lender/lender_step_1.component.jsx';
import {LayoutContainer} from './containers/app/layout.container.jsx';
import {LoginContainer} from './containers/app/login.container.jsx';
import {SignUpContainer} from './containers/app/signup.container.jsx';
import {HomeContainer} from './containers/app/layout/home.container.jsx';
import {FaqContainer} from './containers/app/layout/faq.container.jsx';
import {ContactUsContainer} from './containers/app/layout/contact-us.container.jsx';
import {OurTeamContainer} from './containers/app/layout/our-team.container.jsx';
import {PrivacyContainer} from './containers/app/layout/privacy.container.jsx';
import {TermsContainer} from './containers/app/layout/terms.container.jsx';
import {WizardContainer} from './containers/app/layout/wizard.container.jsx';
import {Step1Container} from './containers/app/layout/wizard/step-1.container.jsx';
import {ForgotPasswordContainer} from './containers/app/layout/forgot-password.container.jsx';
import {Step2Container} from './containers/app/layout/wizard/step-2.container.jsx';
import {Step3Container} from './containers/app/layout/wizard/step-3.container.jsx';
import {Step4Container} from './containers/app/layout/wizard/step-4.container.jsx';
import {Step5Container} from './containers/app/layout/wizard/step-5.container.jsx';
import {Step6Container} from './containers/app/layout/wizard/step-6.container.jsx';
import {Step7Container} from './containers/app/layout/wizard/step-7.container.jsx';
import {UserInfoContainer} from './containers/app/layout/user-info.container.jsx';
import {Step7LoanInfoContainer} from './containers/app/layout/wizard/step-7/loan-info.container.jsx';
import {OldUserRedirectContainer} from './containers/app/layout/old-user-redirect.container.jsx';
import {LoanRejection1Container} from './containers/app/layout/loan-rejection1.container.jsx';
import {LoanRejection2Container} from './containers/app/layout/loan-rejection2.container.jsx';
import {IoanAcceptContainer} from './containers/app/layout/loan-accept.container.jsx';
import {ProfileContainer} from './containers/app/profile.container.jsx';
import {EmploymentInformationContainer} from './containers/app/employment-information.container.jsx';
import {ProfileLayoutContainer} from './containers/app/profile-layout-container.jsx';
import {Step7PersonalDetailContainer} from './containers/app/layout/wizard/step-7/personal-detail.container.jsx';
import {Step7ContactInfoContainer} from './containers/app/layout/wizard/step-7/contact.container.jsx';
import {LoanApplicationContainer} from './containers/app/layout/loan-app-container';

export function routes(store) {
// isAuthorized function checks each route call
// and determines access level for the user
  function isAuthorized(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    if (!token) {
      replace('/login');
    }
    return callback();
  }

  function handleRedirect(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role === 'borrower')
    // replace('/loanapplication_status_1')
    {
      replace('/user/old-user-redirect');
    } else if (token && role === 'lender') {
      replace('/dashboard');
    }
    return callback();
  }

  function handleLenderRedirection(nextState, replace, callback) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role === 'borrower') {
      replace({
        pathname: '*'
      });
    }
    return callback();
  }

  function checkPermissions(nextState, replace, callback) {
    const {permissions} = store.getState().user;

    let needPermissions = [];

    nextState.routes.forEach((route) => {
      if (route.permissions) {
        needPermissions = needPermissions.concat(route.permissions);
      }
    });

    let isHavePermission = true;

    needPermissions.forEach(permission => {
      if (permissions.indexOf(permission) === -1) {
        isHavePermission = false;
      }
    });

    if (!isHavePermission) {
      replace('/login');
    }

    return callback();
  }

  return (
    <Route component={AppContainer}>
      <Route path='/login' compoent={Index}>
        <IndexRoute component={LoginContainer} onEnter={handleRedirect}/>
        <Route path='/sign-up' component={SignUpContainer} onEnter={handleRedirect}/>
        <Route path='/forgot-password' component={ForgotPasswordContainer}/>
      </Route>
      <Route path='/wizard' component={WizardContainer} permissions={['user']} onEnter={checkPermissions}>
        <IndexRoute component={Step1Container}/>
        <Route path='/wizard/step-2' component={Step2Container}/>
        <Route path='/wizard/step-3' component={Step3Container}/>
        <Route path='/wizard/step-4' component={Step4Container}/>
        <Route path='/wizard/step-5' component={Step5Container}/>
        <Route path='/wizard/step-6' component={Step6Container}/>
        <Route path='/wizard/step-7' component={Step7Container}>
          <IndexRoute component={Step7PersonalDetailContainer}/>
          <Route path='/wizard/step-7/contact' component={Step7ContactInfoContainer}/>
          <Route path='/wizard/step-7/loan' component={Step7LoanInfoContainer} />
        </Route>
        <Route path='/wizard/submit' component={UserInfoContainer}/>
        <Route path='/user-info/loan-acknowledgement-reject-reason1' component={LoanRejection1Container}/>
        <Route path='/user-info/loan-acknowledgement-reject-reason2' component={LoanRejection2Container}/>
        <Route path='/user-info/loan-acknowledgement-accept' component={IoanAcceptContainer}/>
        <Route path='/user/old-user-redirect' component={OldUserRedirectContainer}/>
        {/* eslint-disable */}
        {/* <Route path='/loanapplication_status_1' component={loanapplicationstatus1} onEnter={handleBorrowerRedirection} /> */}
        {/* <Route path='/loanapplication_status_2' component={loanapplicationstatus2} onEnter={handleBorrowerRedirection} /> */}
        {/* <Route path='/loanapplication_status_3' component={loanapplicationstatus3} onEnter={handleBorrowerRedirection} />*/}
        {/* <Route path='/loanapplication_status_4' component={loanapplicationstatus4} onEnter={handleBorrowerRedirection} /> */}
        {/* eslint-enable */}
      </Route>
      <Route path='/' component={LayoutContainer} onEnter={handleRedirect}>
        <IndexRoute component={HomeContainer}/>
        {/* <Route path='/about' component={AboutContainer} />*/}
        <Route path='/faq' component={FaqContainer}/>
        <Route path='/contact-us' component={ContactUsContainer}/>
        <Route path='/privacy' component={PrivacyContainer}/>
        <Route path='/terms' component={TermsContainer}/>
        <Route path='/our-team' component={OurTeamContainer}/>
      </Route>
      <Route path='/dashboard' component={LenderSection} onEnter={isAuthorized}>
        <IndexRoute component={dashboard} onEnter={handleLenderRedirection}/>
        <Route path='/change-password' component={changePassword} onEnter={handleLenderRedirection}/>
        <Route path='/lender_step_1' component={lenderChoice} onEnter={handleLenderRedirection}/>
      </Route>
      <Route path='/account-activation' component={accountActivation}/>
      <Route path='/reset-password' component={resetPassword}/>
      <Route path='/profile' component={ProfileLayoutContainer} permissions={['user']}>
        <IndexRoute component={ProfileContainer}/>
        <Route path='/profile/employment-information' component={EmploymentInformationContainer}/>
        <Route path='/profile/loan-app' component={LoanApplicationContainer}/>
      </Route>
      <Route path='*'>
        <IndexRoute component={notFound}/>
      </Route>
    </Route>

  );
}
