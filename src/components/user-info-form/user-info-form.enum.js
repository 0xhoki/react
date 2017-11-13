export const getGenderSelectOptions = (wizard7) => ([
  {value: 'M', label: wizard7.male},
  {value: 'F', label: wizard7.female}
]);

export const getMaritalStatusOptions = (wizard7) => ([
  {value: '1', label: wizard7.single},
  {value: '2', label: wizard7.married},
  {value: '3', label: wizard7.divorced},
  {value: '4', label: wizard7.widowed}
]);

export const getPurposeOptions = (loaninfo) => ([
  {value: '1', label: loaninfo.education_fees},
  {value: '2', label: loaninfo.wedding_expenses},
  {value: '3', label: loaninfo.medical_expenses},
  {value: '4', label: loaninfo.item_purchases},
  {value: '5', label: loaninfo.holiday_expenses},
  {value: '6', label: loaninfo.home_renovation},
  {value: '7', label: loaninfo.repaying_other_loans},
  {value: '8', label: loaninfo.other}
]);