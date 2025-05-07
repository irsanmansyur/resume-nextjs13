type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  // read route params
  const id = params.id;
  return {
    title: "Okela ini id product " + id,
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const id = params.id;
  return <div className="py-20 flex justify-center items-center h-[calc(100vh+200px)]">Welcome {id}</div>;
}
