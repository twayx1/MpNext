import { Text, TextField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type TitleProps = ComponentProps & {
  fields: {
    Title: TextField;
  };
};

const Title = ({ fields }: TitleProps): JSX.Element => (
  <div className="uk-container">
    <Text tag="h1" className="uk-text-bold uk-h1" field={fields.Title} />
  </div>
);

// check presentation details: datasource should be "shortcut:footer"
export default withDatasourceCheck()<TitleProps>(Title);
