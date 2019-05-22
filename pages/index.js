import Inbox from '../src/Inbox';
import {useState} from 'react';
import { i18n }from '../src/i18n'
import { I18nProvider } from '@lingui/react'


const Index = ({ messages, markAsRead, user }) => {
    const [locale, setLocale]=useState('fr');
    i18n.activate(locale)
    const changeLanguage=()=>{
      locale==='en'?setLocale('fr'):setLocale('en')      ;      
    }
    console.log("render index", locale,i18n);
    return (
      <>
      <h1>Foo s</h1>    
      <button onClick={changeLanguage}>toggle</button>
      <p>{locale}</p>
      <I18nProvider language={locale} locale={locale} i18n={i18n}>        
        <Inbox messages={[]} markAsRead={()=>console.log("read")} user={{name:"foo"}} />
      </I18nProvider>
      </>
    );
};
Index.getInitialProps = async ({ req }) => {
  return { messages:[], markAsRead:()=>{}, user:{} };
};
export default Index