import * as React from "react";
import { MainStackParams } from "@/navigation";
import { AppsStackParams } from "@/navigation/apps";
import { TipsStackParams } from "@/navigation/tips";
import { useSession, Page } from "@/states/temporary/session";
import { NavigationProp, useNavigation } from "@react-navigation/native";
export type PageParams = AppsStackParams & MainStackParams & TipsStackParams;

export type NavigationProps = NavigationProp<PageParams>;

export function useNavigate() {
  const navigation = useNavigation<NavigationProps>();
  const setCurrPage = useSession((state) => state.setCurrPage);

  return React.useCallback(
    <T extends Page>(
      page: T,
      params?: PageParams[T],
      silent: boolean = false
    ) => {
      navigation.navigate(page as Page, params);
      if (silent) return;
      setCurrPage(page);
    },
    [navigation.navigate]
  );
}
