import {
  Placeholder,
  RichText,
  RichTextField,
  Text,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import ItemWithUrl from 'src/types/components/ItemWithUrl';

type FooterProps = ComponentProps & {
  fields: {
    Title: TextField;
    Text: RichTextField;
    Link: ItemWithUrl;
    'Copyright Text': TextField;
  };
};

const Footer = ({ fields, rendering }: FooterProps): JSX.Element => (
  <footer className="uk-section uk-section-secondary uk-padding-remove-bottom">
    <div className="uk-container">
      <div className="uk-grid uk-grid-large uk-grid-stack" data-uk-grid>
        <div className="uk-width-1-2@m uk-first-column">
          <Text tag="div" className="text" field={fields.Title} />
          <RichText tag="div" className="text" field={fields.Text} />
          {fields.Link && <a href={fields.Link?.url}>{fields.Link?.displayName}</a>}
          {/* these are broken somehow ..
          <div>
            <a href="" className="uk-icon-button" data-uk-icon="twitter"></a>
            <a href="" className="uk-icon-button" data-uk-icon="facebook"></a>
            <a href="" className="uk-icon-button" data-uk-icon="instagram"></a>
          </div>*/}
        </div>
        <Placeholder name="machupicchu-footer-navigation" rendering={rendering} />
      </div>
    </div>
    <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
      <Text tag="span" className="uk-text-small uk-text-muted" field={fields['Copyright Text']} />
    </div>
  </footer>
);

// check presentation details: datasource should be "shortcut:footer"
export default withDatasourceCheck()<FooterProps>(Footer);
