import { Placeholder, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import BooleanField from 'src/types/components/BooleanField';

type AccordionProps = ComponentProps & {
  fields: {
    'Multiple Open': BooleanField;
  };
};

const Accordion = ({ fields, rendering }: AccordionProps): JSX.Element => {
  const multipleValue = 'multiple: ' + (fields['Multiple Open'].value ? 'true' : 'false');
  const attrs = { 'uk-accordion': multipleValue };

  return (
    <div className="machupicchu-cp cp-accordion" {...attrs}>
      {/*@Html.Alpaca().ContentParts().Label()*/}
      <Placeholder name="machupicchu-accordion-content" rendering={rendering} />
    </div>
  );
};

export default withDatasourceCheck()<AccordionProps>(Accordion);
