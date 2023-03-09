import {
  RichTextField,
  Text,
  TextField,
  RichText,
  withDatasourceCheck,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type SectionProps = ComponentProps & {
  fields: {
    Title: TextField;
    Subtitle: TextField;
    Description: RichTextField;
  };
  rendering: {
    fields: {
      'Anchor Navigation Title': TextField;
    };
  };
};

const Section = ({ rendering, fields }: SectionProps): JSX.Element => {
  const anchorNavAttributes =
    rendering.fields &&
    rendering.fields['Anchor Navigation Title'] &&
    rendering.fields['Anchor Navigation Title'].value
      ? {
          id: rendering.dataSource,
          'data-anchor-nav-item-name': rendering.fields['Anchor Navigation Title'].value,
          'data-module': 'AnchorNavigation',
        }
      : null;

  return (
    <div className="machupicchu-cp cp-section uk-container uk-section" {...anchorNavAttributes}>
      {/*TODO: @Html.Alpaca().ContentParts().Label()*/}
      <Text tag="h2" field={fields.Title} />
      <Text tag="h3" field={fields.Subtitle} />
      <RichText tag="div" className="description" field={fields.Description} />
      <Placeholder name="machupicchu-section-content" rendering={rendering} />
    </div>
  );
};

// check presentation details: datasource should be "shortcut:Section"
export default withDatasourceCheck()<SectionProps>(Section);
