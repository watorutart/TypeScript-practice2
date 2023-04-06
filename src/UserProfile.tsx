import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dl>{user.name}</dl>
      <dt>趣味</dt>
      <dl>{user.hobbies?.join(" / ")}</dl>
    </dl>
  );
};
