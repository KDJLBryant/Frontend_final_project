import { useRouter } from "next/navigation";

const PageRouter = ({
  route,
  buttonText,
}: {
  route: string;
  buttonText: string;
}) => {
  const router = useRouter();

  return (
    <button className="border" onClick={() => router.push(route)}>
      {buttonText}
    </button>
  );
};

export default PageRouter;
