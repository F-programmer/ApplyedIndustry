import { useMemo } from "react";
import {
	useParams,
	useLocation,
	useHistory,
	useRouteMatch,
} from "react-router-dom";
import queryString from "query-string";

// Hook (combina tudo em um)
function useRouter() {
	const params = useParams();
	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();

	return useMemo(() => {
		return {
			push: history.push,
			replace: history.replace,
			pathname: location.pathname,
			goBack: history.goBack,
			goForward: history.goForward,

			query: {
				...queryString.parse(location.search),
				...params,
			},

			match,
			location,
			history,
		};
	}, [params, match, location, history]);
}

export default useRouter;
export { useRouter };
