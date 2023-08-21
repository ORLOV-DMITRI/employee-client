import { Loading3QuartersOutlined } from "@ant-design/icons";
import { useCurrentQuery } from "../../services/auth";

export const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return (
      <span>
        Загрузка <Loading3QuartersOutlined />
      </span>
    );
  }
  return children;
};
