
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn ={
    firstName: 'Kamal',
    lastName: 'Deep',
    email: 'kamalkdk15@gmail.com'
  };
  return (
   <section className='home'>
    <div className='home-content'>
<header className='home-header'>
<HeaderBox
type="greeting"
title="Welcome"
user={loggedIn?.firstName || 'Guest'}
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
