/**
 * This link component persists the existing query parameters
 *  when navigating to a specific pathname.
 */

import _Link from "next/link";
import { useRouter } from "next/router";

function Link({ href, children }) {
  const router = useRouter();
  return (
    <_Link
      href={{
        pathname: href?.pathname,
        query: {
          ...href?.query,
          ...router?.query,
        },
      }}
    >
      {children}
    </_Link>
  );
}

export default Link;
