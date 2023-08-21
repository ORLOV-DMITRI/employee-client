import { Alert } from "antd";
import { FC } from "react";

type Props = {
  message?: string;
};

export const ErrorMessage: FC<Props> = ({ message }) => {
  if (!message) {
    return null;
  }
  return <Alert message={message} type="error" />;
};
