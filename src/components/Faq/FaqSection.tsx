import { ComponentProps } from 'lib/component-props';
import {
  Placeholder,
  Text,
  RichText,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

type FaqSectionProps = ComponentProps & {  fields: {
  Title: TextField;
  Subtitle: TextField;
  Description: RichTextField;
};};

const FaqSection = ({ rendering, fields }: FaqSectionProps): JSX.Element => {
  return (
    <div className="machupicchu-cp cp-section uk-container uk-section">
      <Text tag="h2" field={fields.Title} />
      <Text tag="h3" field={fields.Subtitle} />
      <RichText tag="div" className="description" field={fields.Description} />
      <Placeholder name="machupicchu-faq-section-content" rendering={rendering} />
    </div>

  );
};

export default FaqSection;