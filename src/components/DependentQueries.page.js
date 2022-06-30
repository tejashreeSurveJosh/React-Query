import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/user/${email}`);
};

const fetchChannelByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueries = (props) => {
  const { email } = props;

  const { data: users } = useQuery(["user-data", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = users?.data.channelId;

  const { data: channel } = useQuery(
    ["channel", channelId],
    () => fetchChannelByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  return (
    <>
      <div>Users</div>
      <h3>{users?.data.channelId}</h3>
      <h5>{users?.data.id}</h5>
      <div>Channels</div>
      <div>{channel?.data.id}</div>
      <h3>
        {channel?.data.courses.map((co) => {
          return <h5>{co}</h5>;
        })}
      </h3>
    </>
  );
};
