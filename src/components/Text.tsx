import {
  RichText,
  RichTextField,
  Text as ScText,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type TextProps = ComponentProps & {
  fields: {
    Title: TextField;
    Text: RichTextField;
  };
};

const Text = ({ fields }: TextProps): JSX.Element => (
  <div className="machupicchu-cp cp-text">
    {/*@Html.Alpaca().ContentParts().Label()*/}
    <ScText tag="h3" field={fields.Title} />
    <RichText tag="div" field={fields.Text} />
  </div>
);

export default withDatasourceCheck()<TextProps>(Text);
