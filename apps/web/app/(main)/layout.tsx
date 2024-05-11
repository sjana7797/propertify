import { ReactNode } from "react";
import Header from "~web/components/global/header";
import { TRPCReactProvider } from "~web/trpc/react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <TRPCReactProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        {children}
      </div>
    </TRPCReactProvider>
  );
}

export default Layout;
