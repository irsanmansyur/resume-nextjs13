type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props) {
  // read route params
  const id = params.id;
  return {
    title: "Okela ini id product " + id,
  };
}

export default function Page({ params, searchParams }: Props) {
  const id = params.id;
  return <div className="py-20 flex justify-center items-center h-[calc(100vh+200px)]">Welcome</div>;
}
