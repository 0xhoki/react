import React from 'react';
import translate from 'counterpart';
import classNames from 'classnames';
import {Link} from 'react-router';
import {LoanAppDocForm} from '../../../../components/loan-app-doc-form/loan-app-doc-form.jsx';
import {isMobile} from '../../../../helpers';

const getLoanConfig = (locale) => ([
  {isDone: true, label: locale.started},
  {isDone: true, label: locale.submitted},
  {isDone: false, label: locale.processing},
  {isDone: false, label: locale.approved},
  {isDone: false, label: locale.disbursed}
]);

const getLoanCardsConfig = (locale) => ([
  {label: locale.loanDetails, total: 10, completed: 10, detailsLink: ''},
  {label: locale.loanDetailsForm, total: 5000, completed: 9, detailsLink: ''},
  {label: locale.personalProfile, total: 9999, completed: 9999, detailsLink: ''},
  {label: locale.bankDetails, total: 10, completed: 10, detailsLink: ''},
  {label: locale.employmentDetails, total: 10, completed: 10, detailsLink: ''},
  {label: locale.spouseDetails, total: 10, completed: 1, detailsLink: ''},
  {label: locale.relativeDetails, total: 10, completed: 10, detailsLink: ''}
]);

class LoanApplicationContainer extends React.Component {
  locale = translate('layout').loanApp;
  isMobile = isMobile();

  render() {
    const {locale} = this;
    const loanAppClass = classNames('loan-app', {'loan-app--mobile': this.isMobile});
    const loanAppCardClass = classNames('loan-card', {'loan-card--mobile': this.isMobile});
    const loanStatusClass = classNames('loan-status', {'loan-status--mobile': this.isMobile});

    return (
      <div className={loanAppClass}>
        <div className='loan-app__header'>{locale.title}</div>
        <div className='loan-app__status'>
          <div className='loan-app__status-row'>
            <div className='loan-app__status-cell'>
              <div className='loan-app__dark-blue'>
                {locale.appData}
              </div>
            </div>
            <div className='loan-app__status-cell'>:</div>
            <div className='loan-app__status-cell'>
              <span className='loan-app__dark-blue'>50%&nbsp;</span>
              {locale.complete}
            </div>
          </div>
          <div className='loan-app__status-row'>
            <div className='loan-app__status-cell'>
              <div className='loan-app__dark-blue'>
                {locale.appStatus}
              </div>
            </div>
            <div className='loan-app__status-cell'>:</div>
            <div className='loan-app__status-cell'>
              {locale.completeAppData}
            </div>
          </div>
        </div>
        <div className='loan-app__progress'>
          <div className={loanStatusClass}>
            {
              getLoanConfig(locale).map((point, key) => {
                const pointClass = classNames('loan-status__point', {'loan-status__point--done': point.isDone});
                return (
                  <div key={key} className={pointClass}>{point.label}</div>
                );
              })
            }
          </div>
        </div>
        <div className='loan-app__group'>
          {
            getLoanCardsConfig(locale).map((card, key) => {
              const cardClass = classNames(loanAppCardClass, {'loan-card--success': card.completed === card.total});
              // {isChecked: false, label: locale.loanDetails, total: 10, completed: 10, detailsLink: ''},
              return (
                <div key={key} className={cardClass}>
                  <div className='loan-card__check-cell'/>
                  <div className='loan-card__caption'>
                    {card.label}
                  </div>
                  <div className='loan-card__complete'>
                    {card.completed}/{card.total}&nbsp;{locale.complete}
                  </div>
                  <Link className='loan-card__view-details' to={card.detailsLink}>
                    {locale.viewDetails}
                  </Link>
                </div>
              );
            })
          }
        </div>
        <div className='loan-app__text'>
          {locale.uploadDocuments}
        </div>
        <div className='loan-app__upload-group'>
          <LoanAppDocForm />
        </div>
        <div className='loan-app__group'>
          <div className='loan-app__btn loan-app__btn--danger'>
            <i className='fa fa-times'/>
            {locale.deleteApp}
          </div>
          <div className='loan-app__btn'>
            <i className='fa fa-file-o'/>
            {locale.submitLoan}
          </div>
        </div>
      </div>
    );
  }
}

export {LoanApplicationContainer};
