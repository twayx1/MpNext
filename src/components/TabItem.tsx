import {
  RichText,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type TabItemProps = ComponentProps & {
  fields: {
    Text: RichTextField;
    Title: TextField;
  };
};

const TabItem = ({ fields }: TabItemProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;

  return isEditing ? (
    <>
      {/* @Html.Alpaca().ContentParts().Label() */}
      <Text tag="div" field={fields.Title} />
      <RichText tag="div" field={fields.Text} />
    </>
  ) : (
    <RichText field={fields.Text} />
  );
};

export default TabItem;
