interface FriendsProps {
  friend: {
    _id: string;
    title: string;
    url: string;
    addressUrl: string;
    imageUrl: string;
    address: string;
    workDays: object[];
    phone: string;
    email: string;
  };
}

function FriendsItem({ friend }: FriendsProps) {
  return <li>{friend.title}</li>;
}

export default FriendsItem;
