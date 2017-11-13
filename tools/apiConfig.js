/*** constants for api URL ***/
/*** ENV SELECTION ***/

/*** ENV1-BEG = LOCALHOST ***/
let base_url = 'http://localhost:8000/';
/*** ENV1-END = LOCALHOST ***/

/*** ENV2-BEG = AMAZONAWS ***/
// let base_url = "https://api.danakita.com/";
/*** ENV2-END = AMAZONAWS ***/

{
  /*let base_url = "http://172.10.155.101:8000/";*/
}

{
  /*>>>>>>> ab6f08a69b7bb64f2b1c7220c3eee1bfff2c28c6*/
}
// // ENV2-END = AMAZONAWS ///

export const SIGNUP_USER = base_url + 'api/v1/user/signup';

export const LOGIN_USER = base_url + 'api/v1/user/login';

export const SAVE_KTP = base_url + 'api/v1/user/voterApiDetail';

export const SAVE_PERSONALDETAILS = base_url + 'api/v1/user/SaveUserDetail';

export const SAVE_STATUS = base_url + 'api/v1/loan/saveBorrowerEmpDetail';

export const GET_STATUS = base_url + 'api/v1/loan/getBorrowerEmpDetail';

export const GET_EMPINFO = base_url + 'api/v1/loan/getEmpDetail';

export const SAVE_EMPINFO = base_url + 'api/v1/loan/saveEmpDetail';

export const GET_RELATIVEINFO = base_url + 'api/v1/loan/getRelativeDetail';

export const SAVE_RELATIVEINFO = base_url + 'api/v1/loan/saveRelativeDetail';

export const COMPLETE_USERINFO = base_url + 'api/v1/user/completeLoan';

export const COMPLETE_LOAN = base_url + 'api/v1/loan/loanStatus';

export const GET_KTP_DATA = base_url + 'api/v1/user/getVoterApiData';

export const GET_KTP_DETAILS = base_url + 'api/v1/user/getVoterApiDetail';

export const GET_PHONENUM = base_url + 'api/v1/user/getPhoneNo';

export const REGISTER_PHONE = base_url + 'api/v1/user/registerPhone';

export const VERIFY_PHONE = base_url + 'api/v1/user/verifyPhone';

export const SAVE_CONTACTINFO = base_url + 'api/v1/user/saveAddress';

export const GET_KTPADDRESS = base_url + 'api/v1/user/getKtpAddress';

export const GET_PROVINCES = base_url + 'api/v1/user/getProvinces';

export const GET_CITIES = base_url + 'api/v1/user/getCity';

export const GET_DISTRICTS = base_url + 'api/v1/user/getDistrict';

export const GET_SUBS = base_url + 'api/v1/user/getSubdistrict';

export const GET_CONTACTINFO = base_url + 'api/v1/user/getAddress';

export const SAVE_LOANINFO = base_url + 'api/v1/loan/createloan';

export const GET_LOANINFO = base_url + 'api/v1/loan/getLoanDetail';

export const ACCOUNT_ACTIVATION = base_url + 'api/v1/user/verifyAccount';

export const LENDER_LOGIN = base_url + 'api/v1/user/lenderLogin';

export const FORGOT_PASSWORD = base_url + 'api/v1/user/forgotPassword';

export const RESET_PASSWORD = base_url + 'api/v1/user/resetPassword';

export const CHANGE_PASSWORD = base_url + 'api/v1/user/changePassword';

export const UPLOAD_IMAGE = base_url + 'api/v1/upload/docUpload';

export const UPLOAD_DOCS = base_url + 'api/v1/upload/pdfDocUpload';

export const VALIDATE_ZIP = base_url + 'api/v1/user/validateZip';

export const VERIFY_KTP = base_url + 'api/v1/user/validateKtp';

export const VALIDATE_EMAIL = base_url + 'api/v1/user/validateEmail';

export const VERIFY_PHONENUM = base_url + 'api/v1/user/validatePhone';

export const GET_DOCS = base_url + 'api/v1/upload/getLoanDocument';

//export const GET_STATUS = base_url + 'api/v1/upload/getLoanDocument';

export const SAVE_BANKDETAILS = base_url + 'api/v1/user/addBank';

export const GET_BANKDETAILS = base_url + 'api/v1/user/getBank';

export const FINAL_SUBMIT = base_url + 'api/v1/loan/postPreview';
