import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FaqProps = ComponentProps & {
  fields: {
    'Multiple Open': boolean;
  };
};

const Faq = ({ rendering, fields }: FaqProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext?.pageEditing == true;
  const attrs = isEditing
    ? {}
    : fields['Multiple Open']
      ? { 'uk-accordion': 'multiple: true;' }
      : { 'uk-accordion': 'multiple: false;' };
  return (
    <div className="machupicchu-cp cp-faq" {...attrs}>
      <Placeholder name="machupicchu-faq-content" rendering={rendering} />
    </div>
  );
};

export default Faq;