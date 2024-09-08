
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
 const loggedIn = await getLoggedInUser();
  return (
   <section className='home'>
    <div className='home-content'>
<header className='home-header'>
<HeaderBox
type="greeting"
title="Welcome"
user={loggedIn?.name || 'Guest'}
subtext="Access your account information and start managing your finances"
 />
 <TotalBalanceBox
 accounts={[]}
 totalBanks={1}
 totalCurrentBalance={19300}
  />
</header>
Recent transactions
    </div>
 <RightSideBar
 user={loggedIn}
 transactions={[]}
 banks={[{ currentBalance: 1500}, {currentBalance: 17800}]}
  />
   </section>
  )
}

export default Home
