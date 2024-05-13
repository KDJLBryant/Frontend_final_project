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
    <button className="custom-nav-button" onClick={() => router.push(route)}>
      {buttonText}
    </button>
  );
};

export default PageRouter;
