import {
  Section,
  Container,
  Heading,
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

// Importing data from JSON files
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1 - Social network profile
        </Heading>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2 - Statistics Section
        </Heading>
          <Statistics title="upload stats" stats={data} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3 - Friends list
        </Heading>
          <FriendList list={friends} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4 - Transaction history
        </Heading>
          <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
};
