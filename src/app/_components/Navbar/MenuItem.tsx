import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface IMenuItemProps {
  children: React.ReactNode;
  to?: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ children, to = "/" }) => {
  return (
    <Link href={to}>
      <Text>{children}</Text>
    </Link>
  );
};
export default MenuItem;
