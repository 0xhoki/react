import './faq.styl';
import React from 'react';
import {Tab, Tabs, Accordion, Panel} from 'react-bootstrap';
import {Link} from 'react-router';
import translate from 'counterpart';
import PropTypes from 'prop-types';

function FAQ(props) {
  const locale = translate('layout');
  const {eventKey} = props;

  return (
    <div className='faq'>
      <Tabs defaultActiveKey={'1'} id={eventKey}>
        <Tab eventKey={'1'} title={locale.FAQpage.Faqtab2}>
          <Accordion>
            <Panel header={locale.FAQpage.Faqtab2header1} eventKey={'2_1'}>
              {locale.FAQpage.Faqtab2content1}
            </Panel>
            <Panel header={locale.FAQpage.Faqtab2header2} eventKey={'2_2'}>
              {locale.FAQpage.Faqtab2content2}
              <div className='intend'>
                {locale.FAQpage.Faqtab2content21}
                <Link to='/sign-up'>
                  {locale.FAQpage.Faqtab2content212}
                </Link>
                <br/>
                {locale.FAQpage.Faqtab2content22}
                <br/>
                {locale.FAQpage.Faqtab2content23}
                <br/>
                {locale.FAQpage.Faqtab2content24}
              </div>
            </Panel>
            <Panel header={locale.FAQpage.Faqtab2header3} eventKey={'2_3'}>
              <div className='intend'>
                {locale.FAQpage.Faqtab2content31}
                <br/>
                {locale.FAQpage.Faqtab2content32}
                <br/>
                {locale.FAQpage.Faqtab2content33}
                <br/>
                {locale.FAQpage.Faqtab2content34}
                <br/>
                {locale.FAQpage.Faqtab2content35}
                <br/>
                {locale.FAQpage.Faqtab2content36}
              </div>
            </Panel>
            <Panel header={locale.FAQpage.Faqtab2header4} eventKey={'2_4'}>
              <div className='intend'>
                {locale.FAQpage.Faqtab2content41}
                <br/>
                {locale.FAQpage.Faqtab2content42}
                <br/>
                {locale.FAQpage.Faqtab2content43}
                <br/>
                {locale.FAQpage.Faqtab2content44}
              </div>
            </Panel>
            <Panel header={locale.FAQpage.Faqtab2header5} eventKey={'2_5'}>
              {locale.FAQpage.Faqtab2content5}
              <br/>
              {locale.FAQpage.Faqtab2content51}
              <br/>
              {locale.FAQpage.Faqtab2content52}
              <p>{locale.FAQpage.Faqtab2content53}</p>
            </Panel>
            <Panel header={locale.FAQpage.Faqtab2header6} eventKey={'2_6'}>
              {locale.FAQpage.Faqtab2content6}
            </Panel>
          </Accordion>
        </Tab>
        <Tab eventKey={'2'} title={locale.FAQpage.Faqtab3}>
          <Accordion>
            <Panel header={locale.FAQpage.Faqtab3header1} eventKey={'3_1'}>
              {locale.FAQpage.Faqtab3content1}
              <a
                href='mailto:webmaster@danakita.com'
                target='_top'
              >
                {locale.FAQpage.Faqtab3content11}
              </a>
            </Panel>
            <Panel header={locale.FAQpage.Faqtab3header2} eventKey={'3_2'}>
              {locale.FAQpage.Faqtab3content2}
              <p>
                {locale.FAQpage.Faqtab3content22}
              </p>
            </Panel>
          </Accordion>
        </Tab>
        <Tab eventKey={'3'} title={locale.FAQpage.Faqtab1}>
          <Accordion>
            <Panel header={locale.FAQpage.Faqtab1header} eventKey={'1_1'}>
              {locale.FAQpage.Faqtab1content}
              <p>
                {locale.FAQpage.Faqtab1content1}
              </p>
            </Panel>
          </Accordion>
        </Tab>
      </Tabs>
    </div>
  );
}

FAQ.propTypes = {
  eventKey: PropTypes.string
};

export {FAQ};
