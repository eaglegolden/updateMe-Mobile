import * as React from "react";
import MultiIcon from "@/components/multiIcon";
import { useNavigate } from "@/hooks/useNavigate";
import { useDialogs } from "@/states/runtime/dialogs";
import { List } from "react-native-paper";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";

const FeelsLikeHomeIcon = (props: { color: string; style: Style }) => (
  <MultiIcon {...props} size={20} type="feather" name="layout" />
);

const ChevronRightIcon = (props: { color: string; style?: Style }) => (
  <MultiIcon {...props} size={20} type="material-icons" name="chevron-right" />
);

const SettingsLayout = () => {
  const navigate = useNavigate();
  const openDialog = useDialogs((state) => state.openDialog);
  return (
    <List.Section title="Layout">
      <List.Item
        title="Feels like home"
        description="Change the layout of the home screen"
        left={FeelsLikeHomeIcon}
        right={ChevronRightIcon}
        onPress={() => {
          navigate("apps", { silent: true });
          openDialog("homeLayoutPicker");
        }}
      />
    </List.Section>
  );
};

SettingsLayout.displayName = "SettingsLayout";

export default SettingsLayout;
