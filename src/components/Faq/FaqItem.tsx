import { ComponentProps } from 'lib/component-props';
import {
  Placeholder,
  useSitecoreContext,
  Text,
  TextField,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

type FaqItemProps = ComponentProps & {  fields: {
  'Title': TextField;
  'Text': RichTextField;
  'Default Open': boolean;
};};

const FaqItem = ({ rendering, fields }: FaqItemProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  const liStyleClass = fields['Default Open'] ? "machupicchu-cp cp-faq-item uk-open" : "machupicchu-cp cp-faq-item"
  return (
     isEditing ? (
      <div className="machupicchu-cp cp-faq-item" >
        <Text tag="a" className="uk-accordion-title" href="#" field={fields.Title} />
        <RichText tag="div" className="uk-accordion-content" field={fields.Text} />
        <div className="uk-accordion-content">
          <RichText tag="div" className="uk-accordion-content" field={fields.Text} />
          <Placeholder name="machupicchu-faq-item-content" rendering={rendering} />
        </div>
      </div>
    ) : (
      <li className={liStyleClass}>
        <Text tag="a" className="uk-accordion-title" href="#" field={fields.Title} />
        <div className="uk-accordion-content">
          <RichText tag="div" className="uk-accordion-content" field={fields.Text} />
          <Placeholder name="machupicchu-faq-item-content" rendering={rendering} />
        </div>
      </li>
    )
  );
};

export default FaqItem;