import {
  Text,
  RichTextField,
  TextField,
  withDatasourceCheck,
  RichText,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import BooleanField from 'src/types/components/BooleanField';

type AccordionItemProps = ComponentProps & {
  fields: {
    Title: TextField;
    Text: RichTextField;
    'Default Open': BooleanField;
  };
};

const AccordionItem = ({ fields }: AccordionItemProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  const attrs = fields['Default Open'].value ? { className: 'uk-open' } : null;

  return isEditing ? (
    <div>
      <Text className="uk-accordion-title" field={fields.Title} />
      <RichText tag="div" className="uk-accordion-content" field={fields.Text} />
    </div>
  ) : (
    <li className="machupicchu-cp cp-accordion-item" {...attrs}>
      <Text tag="a" className="uk-accordion-title" field={fields.Title} />
      <RichText tag="div" className="uk-accordion-content" field={fields.Text} />
    </li>
  );
};

export default withDatasourceCheck()<AccordionItemProps>(AccordionItem);
