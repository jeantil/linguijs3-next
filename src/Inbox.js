//import { Trans } from '@lingui/macro';
import Link from 'next/link';
//const Trans =({children})=>(<>{children}</>)
//const Link = ({children})=>(<>{children}</>)
import { useLingui } from "@lingui/react"
import { t, Trans, Plural } from "@lingui/macro"

const Inbox=({ messages, markAsRead, user }) => {
  const messagesCount = messages.length
  const { name, lastLogin } = user
  const { i18n } = useLingui();
  return (
     <>
       <h2><Trans>Message Inbox</Trans></h2>

       <p>
         See all <Link href="/unread"><a>unread messages</a></Link>{" or "}
         <a onClick={markAsRead}>mark them</a> as read.
       </p>
       <h3>
        <Trans>LinguiJS example</Trans>
      </h3>

       <p>
         {
           messagesCount === 1
             ? "There's {messagesCount} message in your inbox."
             : "There're {messagesCount} messages in your inbox."
         }
       </p>

       <footer>
         Last login on {lastLogin}.
       </footer>
     </>
  );
};
export default Inbox;