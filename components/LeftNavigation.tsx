import { Sidebar } from "flowbite-react";

const LeftNavigation = () => (
  <Sidebar className="h-screen">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/" label="Public Repositories" />
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
);

export default LeftNavigation;
