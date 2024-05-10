import { ReactNode } from "react";
import Header from "~web/components/global/header";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props): JSX.Element {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
