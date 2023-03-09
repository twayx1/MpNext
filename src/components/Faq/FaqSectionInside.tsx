import { ComponentProps } from 'lib/component-props';
import {
  Placeholder,
  Text,
  RichText,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

type FaqSectionInsideProps = ComponentProps & {  fields: {
  Title: TextField;
  Subtitle: TextField;
  Description: RichTextField;
};};

const FaqSectionInside = ({ rendering, fields }: FaqSectionInsideProps): JSX.Element => {
  return (
    <div className="machupicchu-cp cp-section uk-container uk-section">
      <Text tag="h2" field={fields.Title} />
      <Text tag="h3" field={fields.Subtitle} />
      <RichText tag="div" className="description" field={fields.Description} />
      <Placeholder name="machupicchu-faq-inside-section-content" rendering={rendering} />
    </div>

  );
};

export default FaqSectionInside;