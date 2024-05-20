import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import friendsData from '../../friendsData.json';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactionData from '../../transactionData.json';

export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friendsData={friendsData} />
      <TransactionHistory transactionData={transactionData} />
    </>
  );
}
