import { InferGetServerSidePropsType } from "next";
import { Table } from "flowbite-react";
import { keys, values } from "lodash";
import LeftNavigation from "@/components/LeftNavigation";
import { getPublicRepos } from "@/lib/github";

export const getServerSideProps = async () => {
  try {
    const { data } = await getPublicRepos();
    return {
      props: {
        data: {
          repos: data,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        data: {
          repos: [],
        },
      },
    };
  }
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex">
      <LeftNavigation />
      <main className="overflow-scroll p-4 h-screen">
        <Table>
          <Table.Head>
            {keys(data.repos[0]).map((key) => (
              <Table.HeadCell key={key}>{key}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {data.repos.map((repo) => (
              <Table.Row key={repo.id}>
                {values(repo).map((value, index) => (
                  <Table.Cell key={index}>{value?.toString()}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </main>
    </div>
  );
}
