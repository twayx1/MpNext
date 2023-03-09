import {
  RichText,
  RichTextField,
  Text as ScText,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type QuoteProps = ComponentProps & {
  fields: {
    Author: TextField;
    "Quote Text": RichTextField;
  };
};

const Quote = ({ fields }: QuoteProps): JSX.Element => (
  <blockquote className="machupicchu-cp cp-quote" cite="#">
    <RichText tag="div" field={fields["Quote Text"]} />
    <footer>
        <ScText tag="cite" field={fields.Author} />
    </footer>
  </blockquote>
);

export default withDatasourceCheck()<QuoteProps>(Quote);
